
import * as crypto from "crypto";

export function replaceImportsFromStaticInJsCode(
    params: {
        ftlValuesGlobalName: string;
        jsCode: string;
    }
): { fixedJsCode: string; } {

    const { jsCode, ftlValuesGlobalName } = params;

    const fixedJsCode = jsCode.replace(
        /[a-z]+\.[a-z]+\+"static\//g,
        `window.${ftlValuesGlobalName}.url.resourcesPath + "/build/static/`
    );

    return { fixedJsCode };

}

export function replaceImportsInInlineCssCode(
    params: {
        cssCode: string;
        urlPathname: string;
    }
): { fixedCssCode: string; } {

    const { cssCode, urlPathname } = params;

    const fixedCssCode = cssCode.replace(
        urlPathname === "/" ?
            /url\(\/([^/][^)]+)\)/g :
            new RegExp(`url\\(${urlPathname}([^)]+)\\)`, "g"),
        (...[, group]) => `url(${"${url.resourcesPath}/build/" + group})`
    );

    return { fixedCssCode };

}

export function replaceImportsInCssCode(
    params: {
        cssCode: string;
    }
): {
    fixedCssCode: string;
    cssGlobalsToDefine: Record<string, string>;
} {

    const { cssCode } = params;

    const cssGlobalsToDefine: Record<string, string> = {};

    new Set(cssCode.match(/url\(\/[^/][^)]+\)[^;}]*/g) ?? [])
        .forEach(match =>
            cssGlobalsToDefine[
            "url" + crypto
                .createHash("sha256")
                .update(match)
                .digest("hex")
                .substring(0, 15)
            ] = match
        );

    let fixedCssCode = cssCode;

    Object.keys(cssGlobalsToDefine).forEach(
        cssVariableName =>
            //NOTE: split/join pattern ~ replace all
            fixedCssCode =
            fixedCssCode.split(cssGlobalsToDefine[cssVariableName])
                .join(`var(--${cssVariableName})`)
    );

    return { fixedCssCode, cssGlobalsToDefine };

}

export function generateCssCodeToDefineGlobals(
    params: {
        cssGlobalsToDefine: Record<string, string>;
        urlPathname: string;
    }
): {
    cssCodeToPrependInHead: string;
} {

    const { cssGlobalsToDefine, urlPathname } = params;

    return {
        "cssCodeToPrependInHead": [
            ":root {",
            ...Object.keys(cssGlobalsToDefine)
                .map(cssVariableName => [
                    `--${cssVariableName}:`,
                    cssGlobalsToDefine[cssVariableName]
                        .replace(new RegExp(`url\\(${urlPathname.replace(/\//g, "\\/")}`, "g"), "url(${url.resourcesPath}/build/")
                ].join(" "))
                .map(line => `    ${line};`),
            "}"
        ].join("\n")
    };

}



