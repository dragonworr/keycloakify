
import { transformCodebase } from "../tools/transformCodebase";
import * as fs from "fs";
import { join as pathJoin } from "path";
import {
    replaceImportFromStaticInCssCode,
    replaceImportFromStaticInJsCode
} from "./replaceImportFromStatic";
import { generateFtlFilesCodeFactory, pageIds } from "./generateFtl";
import { builtinThemesUrl } from "../install-builtin-keycloak-themes";
import { downloadAndUnzip } from "../tools/downloadAndUnzip";
import * as child_process from "child_process";
import { ftlValuesGlobalName } from "./ftlValuesGlobalName";

export function generateKeycloakThemeResources(
    params: {
        themeName: string;
        reactAppBuildDirPath: string;
        keycloakThemeBuildingDirPath: string;
    }
) {

    const { themeName, reactAppBuildDirPath, keycloakThemeBuildingDirPath } = params;

    const themeDirPath = pathJoin(keycloakThemeBuildingDirPath, "src", "main", "resources", "theme", themeName, "login");

    let allCssGlobalsToDefine: Record<string, string> = {};

    transformCodebase({
        "destDirPath": pathJoin(themeDirPath, "resources", "build"),
        "srcDirPath": reactAppBuildDirPath,
        "transformSourceCode": ({ filePath, sourceCode }) => {

            if (/\.css?$/i.test(filePath)) {

                const { cssGlobalsToDefine, fixedCssCode } = replaceImportFromStaticInCssCode(
                    { "cssCode": sourceCode.toString("utf8") }
                );

                allCssGlobalsToDefine = {
                    ...allCssGlobalsToDefine,
                    ...cssGlobalsToDefine
                };

                return { "modifiedSourceCode": Buffer.from(fixedCssCode, "utf8") };

            }

            if (/\.js?$/i.test(filePath)) {

                const { fixedJsCode } = replaceImportFromStaticInJsCode({
                    "jsCode": sourceCode.toString("utf8"),
                    ftlValuesGlobalName
                });

                return { "modifiedSourceCode": Buffer.from(fixedJsCode, "utf8") };

            }

            return { "modifiedSourceCode": sourceCode };

        }
    });

    const { generateFtlFilesCode } = generateFtlFilesCodeFactory({
        "cssGlobalsToDefine": allCssGlobalsToDefine,
        ftlValuesGlobalName,
        "indexHtmlCode": fs.readFileSync(
            pathJoin(reactAppBuildDirPath, "index.html")
        ).toString("utf8")
    });

    pageIds.forEach(pageId => {

        const { ftlCode } = generateFtlFilesCode({ pageId });

        fs.writeFileSync(
            pathJoin(themeDirPath, pageId),
            Buffer.from(ftlCode, "utf8")
        );

    });

    {

        const tmpDirPath = pathJoin(themeDirPath, "..", "tmp_xxKdLpdIdLd");

        downloadAndUnzip({
            "url": builtinThemesUrl,
            "destDirPath": tmpDirPath
        });

        transformCodebase({
            "srcDirPath": pathJoin(tmpDirPath, "keycloak", "login", "resources"),
            "destDirPath": pathJoin(themeDirPath, "resources")
        });

        child_process.execSync(`rm -r ${tmpDirPath}`);

    }

    fs.writeFileSync(
        pathJoin(themeDirPath, "theme.properties"),
        Buffer.from("parent=keycloak", "utf8")
    );

}

