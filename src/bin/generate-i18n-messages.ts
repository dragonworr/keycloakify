import "minimal-polyfills/Object.fromEntries";
import * as fs from "fs";
import { join as pathJoin, relative as pathRelative } from "path";
import { crawl } from "./tools/crawl";
import { downloadBuiltinKeycloakTheme } from "./download-builtin-keycloak-theme";
import { getProjectRoot } from "./tools/getProjectRoot";
import { rm_rf, rm_r } from "./tools/rm";
import { keycloakVersions } from "./KeycloakVersion";

//@ts-ignore
const propertiesParser = require("properties-parser");

for (const keycloakVersion of keycloakVersions) {

    console.log({ keycloakVersion });

    const tmpDirPath = pathJoin(getProjectRoot(), "tmp_xImOef9dOd44");

    rm_rf(tmpDirPath);

    downloadBuiltinKeycloakTheme({
        keycloakVersion,
        "destDirPath": tmpDirPath
    });

    type Dictionary = { [idiomId: string]: string };

    const record: { [typeOfPage: string]: { [language: string]: Dictionary } } = {};

    {

        const baseThemeDirPath = pathJoin(tmpDirPath, "base");

        crawl(baseThemeDirPath).forEach(filePath => {

            const match = filePath.match(/^([^/]+)\/messages\/messages_([^.]+)\.properties$/);

            if (match === null) {
                return;
            }

            const [, typeOfPage, language] = match;

            (record[typeOfPage] ??= {})[language.replace(/_/g, "-")] =
                Object.fromEntries(
                    Object.entries(
                        propertiesParser.parse(
                            fs.readFileSync(
                                pathJoin(baseThemeDirPath, filePath)
                            )
                                .toString("utf8")
                        )
                    ).map(([key, value]: any) => [key, value.replace(/''/g, "'")])
                );

        });

    }

    rm_r(tmpDirPath);

    const targetDirPath = pathJoin(getProjectRoot(), "src", "lib", "i18n", "generated_kcMessages", keycloakVersion);

    fs.mkdirSync(targetDirPath, { "recursive": true });

    Object.keys(record).forEach(pageType => {

        const filePath = pathJoin(targetDirPath, `${pageType}.ts`);

        fs.writeFileSync(
            filePath,
            Buffer.from(
                [
                    `//This code was automatically generated by running ${pathRelative(getProjectRoot(), __filename)}`,
                    '//PLEASE DO NOT EDIT MANUALLY',
                    '',
                    '/* spell-checker: disable */',
                    `export const kcMessages= ${JSON.stringify(record[pageType], null, 2)};`,
                    '/* spell-checker: enable */'
                ].join("\n"), "utf8")
        );

        console.log(`${filePath} wrote`);

    });

}
