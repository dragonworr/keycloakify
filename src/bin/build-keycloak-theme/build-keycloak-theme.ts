import { generateKeycloakThemeResources } from "./generateKeycloakThemeResources";
import { generateJavaStackFiles } from "./generateJavaStackFiles";
import { join as pathJoin, relative as pathRelative, basename as pathBasename } from "path";
import * as child_process from "child_process";
import { generateDebugFiles, containerLaunchScriptBasename } from "./generateDebugFiles";
import { URL } from "url";

type ParsedPackageJson = {
    name: string;
    version: string;
    homepage?: string;
};

const reactProjectDirPath = process.cwd();

const doUseExternalAssets = process.argv[2]?.toLowerCase() === "--external-assets";

const parsedPackageJson: ParsedPackageJson = require(pathJoin(reactProjectDirPath, "package.json"));

export const keycloakThemeBuildingDirPath = pathJoin(reactProjectDirPath, "build_keycloak");

function sanitizeThemeName(name: string) {
    return name
        .replace(/^@(.*)/, "$1")
        .split("/")
        .join("-");
}

export function main() {
    console.log("🔏 Building the keycloak theme...⌚");

    const extraPagesId: string[] = (parsedPackageJson as any)["keycloakify"]?.["extraPages"] ?? [];
    const extraThemeProperties: string[] = (parsedPackageJson as any)["keycloakify"]?.["extraThemeProperties"] ?? [];
    const themeName = sanitizeThemeName(parsedPackageJson.name);

    generateKeycloakThemeResources({
        keycloakThemeBuildingDirPath,
        "reactAppBuildDirPath": pathJoin(reactProjectDirPath, "build"),
        themeName,
        ...(() => {
            const url = (() => {
                const { homepage } = parsedPackageJson;

                return homepage === undefined ? undefined : new URL(homepage);
            })();

            return {
                "urlPathname": url === undefined ? "/" : url.pathname.replace(/([^/])$/, "$1/"),
                "urlOrigin": !doUseExternalAssets
                    ? undefined
                    : (() => {
                          if (url === undefined) {
                              console.error("ERROR: You must specify 'homepage' in your package.json");
                              process.exit(-1);
                          }

                          return url.origin;
                      })(),
            };
        })(),
        extraPagesId,
        extraThemeProperties,
        //We have to leave it at that otherwise we break our default theme.
        //Problem is that we can't guarantee that the the old resources common
        //will still be available on the newer keycloak version.
        "keycloakVersion": "11.0.3",
    });

    const { jarFilePath } = generateJavaStackFiles({
        version: parsedPackageJson.version,
        themeName,
        homepage: parsedPackageJson.homepage,
        keycloakThemeBuildingDirPath,
    });

    child_process.execSync("mvn package", {
        "cwd": keycloakThemeBuildingDirPath,
    });

    generateDebugFiles({
        keycloakThemeBuildingDirPath,
        themeName,
        "keycloakVersion": "15.0.2",
    });

    console.log(
        [
            "",
            `✅ Your keycloak theme has been generated and bundled into ./${pathRelative(reactProjectDirPath, jarFilePath)} 🚀`,
            `It is to be placed in "/opt/jboss/keycloak/standalone/deployments" in the container running a jboss/keycloak Docker image.`,
            "",
            "Using Helm (https://github.com/codecentric/helm-charts), edit to reflect:",
            "",
            "value.yaml: ",
            "    extraInitContainers: |",
            "        - name: realm-ext-provider",
            "          image: curlimages/curl",
            "          imagePullPolicy: IfNotPresent",
            "          command:",
            "            - sh",
            "          args:",
            "            - -c",
            `            - curl -L -f -S -o /extensions/${pathBasename(jarFilePath)} https://AN.URL.FOR/${pathBasename(jarFilePath)}`,
            "          volumeMounts:",
            "            - name: extensions",
            "              mountPath: /extensions",
            "        ",
            "        extraVolumeMounts: |",
            "            - name: extensions",
            "              mountPath: /opt/jboss/keycloak/standalone/deployments",
            "    extraEnv: |",
            "    - name: KEYCLOAK_USER",
            "      value: admin",
            "    - name: KEYCLOAK_PASSWORD",
            "      value: xxxxxxxxx",
            "    - name: JAVA_OPTS",
            "      value: -Dkeycloak.profile=preview",
            "",
            "",
            "To test your theme locally, with hot reloading, you can spin up a Keycloak container image with the theme loaded by running:",
            "",
            `👉 $ ./${pathRelative(reactProjectDirPath, pathJoin(keycloakThemeBuildingDirPath, containerLaunchScriptBasename))} 👈`,
            "",
            "To test your theme: ",
            "- Log into the admin console 👉 http://localhost:8080 username: admin, password: admin 👈",
            '- Create a realm named "myrealm"',
            '- Create a client with id "myclient" and root url: "https://www.keycloak.org/app/"',
            `- Select Login Theme: ${themeName} (don't forget to save at the bottom of the page)`,
            `- Go to 👉 https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in"`,
            `You should see your login page, More details: https://www.keycloak.org/getting-started/getting-started-docker`,
            "",
        ].join("\n"),
    );
}
