import "minimal-polyfills/Object.fromEntries";
import * as fs from "fs";
import { join as pathJoin, relative as pathRelative, dirname as pathDirname } from "path";
import { crawl } from "./tools/crawl";
import { downloadBuiltinKeycloakTheme } from "./download-builtin-keycloak-theme";
import { getProjectRoot } from "./tools/getProjectRoot";
import { rm_rf, rm_r } from "./tools/rm";

//NOTE: To run without argument when we want to generate src/i18n/generated_kcMessages files,
// update the version array for generating for newer version.

//@ts-ignore
const propertiesParser = require("properties-parser");

for (const keycloakVersion of ["11.0.3", "15.0.2", "18.0.1"]) {
    console.log({ keycloakVersion });

    const tmpDirPath = pathJoin(getProjectRoot(), "tmp_xImOef9dOd44");

    rm_rf(tmpDirPath);

    downloadBuiltinKeycloakTheme({
        keycloakVersion,
        "destDirPath": tmpDirPath,
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

            (record[typeOfPage] ??= {})[language.replace(/_/g, "-")] = Object.fromEntries(
                Object.entries(propertiesParser.parse(fs.readFileSync(pathJoin(baseThemeDirPath, filePath)).toString("utf8"))).map(
                    ([key, value]: any) => [key, value.replace(/''/g, "'")],
                ),
            );
        });
    }

    rm_r(tmpDirPath);

    Object.keys(record).forEach(pageType => {
        const recordForPageType = record[pageType];

        Object.keys(recordForPageType).forEach(language => {
            const filePath = pathJoin(getProjectRoot(), "src", "lib", "i18n", "generated_kcMessages", keycloakVersion, pageType, `${language}.ts`);

            fs.mkdirSync(pathDirname(filePath), { "recursive": true });

            fs.writeFileSync(
                filePath,
                Buffer.from(
                    [
                        `//This code was automatically generated by running ${pathRelative(getProjectRoot(), __filename)}`,
                        "//PLEASE DO NOT EDIT MANUALLY",
                        "",
                        "/* spell-checker: disable */",
                        `const messages= ${JSON.stringify(recordForPageType[language], null, 2)};`,
                        "",
                        "export default messages;",
                        "/* spell-checker: enable */",
                    ].join("\n"),
                    "utf8",
                ),
            );

            console.log(`${filePath} wrote`);
        });
    });
}
