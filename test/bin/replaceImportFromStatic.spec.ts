import { replaceImportsFromStaticInJsCode } from "keycloakify/bin/keycloakify/replacers/replaceImportsFromStaticInJsCode";
import { generateCssCodeToDefineGlobals, replaceImportsInCssCode } from "keycloakify/bin/keycloakify/replacers/replaceImportsInCssCode";
import { replaceImportsInInlineCssCode } from "keycloakify/bin/keycloakify/replacers/replaceImportsInInlineCssCode";
import { same } from "evt/tools/inDepth/same";
import { expect, it, describe } from "vitest";

import { isSameCode } from "../tools/isSameCode";

describe("bin/js-transforms", () => {
    const jsCodeUntransformed = `
        function f() {
            return a.p+"static/js/" + ({}[e] || e) + "." + {
                3: "0664cdc0"
            }[e] + ".chunk.js"
        }
        
        function sameAsF() {
            return a.p+"static/js/" + ({}[e] || e) + "." + {
                3: "0664cdc0"
            }[e] + ".chunk.js"
        }

        __webpack_require__.u=function(e){return"static/js/" + e + "." + {
                147: "6c5cee76",
                787: "8da10fcf",
                922: "be170a73"
            } [e] + ".chunk.js"
        }

        t.miniCssF=function(e){return"static/css/"+e+"."+{
                164:"dcfd7749",
                908:"67c9ed2c"
            }[e]+".chunk.css"
        }
    `;
    it("transforms standalone code properly", () => {
        const { fixedJsCode } = replaceImportsFromStaticInJsCode({
            "jsCode": jsCodeUntransformed,
            "buildOptions": {
                "isStandalone": true
            }
        });

        const fixedJsCodeExpected = `
            function f() {
                return window.kcContext.url.resourcesPath + "/build/static/js/" + ({}[e] || e) + "." + {
                    3: "0664cdc0"
                }[e] + ".chunk.js"
            }

            function sameAsF() {
                return window.kcContext.url.resourcesPath + "/build/static/js/" + ({}[e] || e) + "." + {
                    3: "0664cdc0"
                }[e] + ".chunk.js"
            }

            __webpack_require__[(function (){
                var pd= Object.getOwnPropertyDescriptor(__webpack_require__, "p");
                if( pd === undefined || pd.configurable ){
                    Object.defineProperty(__webpack_require__, "p", {
                        get: function() { return window.kcContext.url.resourcesPath; },
                        set: function (){}
                    });
                }
                return "u";
            })()] = function(e) {
                return "/build/static/js/" + e + "." + {
                    147: "6c5cee76",
                    787: "8da10fcf",
                    922: "be170a73"
                } [e] + ".chunk.js"
            }

            t[(function (){
                var pd= Object.getOwnPropertyDescriptor(t, "p");
                if( pd === undefined || pd.configurable ){
                    Object.defineProperty(t, "p", {
                        get: function() { return window.kcContext.url.resourcesPath; },
                        set: function (){}
                    });
                }
                return "miniCssF";
            })()] = function(e) {
                return "/build/static/css/" + e + "." + {
                    164:"dcfd7749",
                    908:"67c9ed2c"
                } [e] + ".chunk.css"
            }

        `;

        expect(isSameCode(fixedJsCode, fixedJsCodeExpected)).toBe(true);
    });
    it("transforms external app code properly", () => {
        const { fixedJsCode } = replaceImportsFromStaticInJsCode({
            "jsCode": jsCodeUntransformed,
            "buildOptions": {
                "isStandalone": false,
                "urlOrigin": "https://demo-app.keycloakify.dev"
            }
        });

        const fixedJsCodeExpected = `
            function f() {
                return ("kcContext" in window ? "https://demo-app.keycloakify.dev/" : a.p) + "static/js/" + ({}[e] || e) + "." + {
                    3: "0664cdc0"
                }[e] + ".chunk.js"
            }

            function sameAsF() {
                return ("kcContext" in window ? "https://demo-app.keycloakify.dev/" : a.p) + "static/js/" + ({}[e] || e) + "." + {
                    3: "0664cdc0"
                }[e] + ".chunk.js"
            }

            __webpack_require__[(function (){
                var pd= Object.getOwnPropertyDescriptor(__webpack_require__, "p");
                if( pd === undefined || pd.configurable ){
                    var p= "";
                    Object.defineProperty(__webpack_require__, "p", {
                        get: function() { return "kcContext" in window ? "https://demo-app.keycloakify.dev/" : p; },
                        set: function (value){ p = value; }
                    });
                }
                return "u";
            })()] = function(e) {
                return "static/js/" + e + "." + {
                    147: "6c5cee76",
                    787: "8da10fcf",
                    922: "be170a73"
                } [e] + ".chunk.js"
            }

            t[(function (){
                var pd= Object.getOwnPropertyDescriptor(t, "p");
                if( pd === undefined || pd.configurable ){
                    var p= "";
                    Object.defineProperty(t, "p", {
                        get: function() { return "kcContext" in window ? "https://demo-app.keycloakify.dev/" : p; },
                        set: function (value){ p = value; }
                    });
                }
                return "miniCssF";
            })()] = function(e) {
                return "static/css/" + e + "." + {
                    164:"dcfd7749",
                    908:"67c9ed2c"
                } [e] + ".chunk.css"
            }
        `;

        expect(isSameCode(fixedJsCode, fixedJsCodeExpected)).toBe(true);
    });
});

describe("bin/css-transforms", () => {
    it("transforms absolute urls to css globals properly with no urlPathname", () => {
        const { fixedCssCode, cssGlobalsToDefine } = replaceImportsInCssCode({
            "cssCode": `
                .my-div {
                    background: url(/logo192.png) no-repeat center center;
                }
    
                .my-div2 {
                    background: url(/logo192.png) no-repeat center center;
                }
    
                .my-div {
                    background-image: url(/static/media/something.svg);
                }
            `
        });

        const fixedCssCodeExpected = `
            .my-div {
                background: var(--url1f9ef5a892c104c);
            }
    
            .my-div2 {
                background: var(--url1f9ef5a892c104c);
            }
    
            .my-div {
                background-image: var(--urldd75cab58377c19);
            }
        `;

        expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);

        const cssGlobalsToDefineExpected = {
            "url1f9ef5a892c104c": "url(/logo192.png) no-repeat center center",
            "urldd75cab58377c19": "url(/static/media/something.svg)"
        };

        expect(same(cssGlobalsToDefine, cssGlobalsToDefineExpected)).toBe(true);

        const { cssCodeToPrependInHead } = generateCssCodeToDefineGlobals({
            cssGlobalsToDefine,
            "buildOptions": {
                "urlPathname": undefined
            }
        });

        const cssCodeToPrependInHeadExpected = `
            :root {
                --url1f9ef5a892c104c: url(\${url.resourcesPath}/build/logo192.png) no-repeat center center;
                --urldd75cab58377c19: url(\${url.resourcesPath}/build/static/media/something.svg);
            }
        `;

        expect(isSameCode(cssCodeToPrependInHead, cssCodeToPrependInHeadExpected)).toBe(true);
    });
    it("transforms absolute urls to css globals properly with custom urlPathname", () => {
        const { fixedCssCode, cssGlobalsToDefine } = replaceImportsInCssCode({
            "cssCode": `
                .my-div {
                    background: url(/x/y/z/logo192.png) no-repeat center center;
                }
    
                .my-div2 {
                    background: url(/x/y/z/logo192.png) no-repeat center center;
                }
    
                .my-div {
                    background-image: url(/x/y/z/static/media/something.svg);
                }
            `
        });

        const fixedCssCodeExpected = `
            .my-div {
                background: var(--urlf8277cddaa2be78);
            }
    
            .my-div2 {
                background: var(--urlf8277cddaa2be78);
            }
    
            .my-div {
                background-image: var(--url8bdc0887b97ac9a);
            }
        `;

        expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);

        const cssGlobalsToDefineExpected = {
            "urlf8277cddaa2be78": "url(/x/y/z/logo192.png) no-repeat center center",
            "url8bdc0887b97ac9a": "url(/x/y/z/static/media/something.svg)"
        };

        expect(same(cssGlobalsToDefine, cssGlobalsToDefineExpected)).toBe(true);

        const { cssCodeToPrependInHead } = generateCssCodeToDefineGlobals({
            cssGlobalsToDefine,
            "buildOptions": {
                "urlPathname": "/x/y/z/"
            }
        });

        const cssCodeToPrependInHeadExpected = `
            :root {
                --urlf8277cddaa2be78: url(\${url.resourcesPath}/build/logo192.png) no-repeat center center;
                --url8bdc0887b97ac9a: url(\${url.resourcesPath}/build/static/media/something.svg);
            }
        `;

        expect(isSameCode(cssCodeToPrependInHead, cssCodeToPrependInHeadExpected)).toBe(true);
    });
});

describe("bin/css-inline-transforms", () => {
    describe("no url pathName", () => {
        const cssCode = `
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/WorkSans/worksans-regular-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/WorkSans/worksans-medium-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/WorkSans/worksans-semibold-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/WorkSans/worksans-bold-webfont.woff2") format("woff2");
        }
    `;
        it("transforms css for standalone app properly", () => {
            const { fixedCssCode } = replaceImportsInInlineCssCode({
                cssCode,
                "buildOptions": {
                    "isStandalone": true,
                    "urlPathname": undefined
                }
            });

            const fixedCssCodeExpected = `
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-regular-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-medium-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-semibold-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-bold-webfont.woff2)
                format("woff2");
            }
        `;

            expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);
        });
        it("transforms css for external app properly", () => {
            const { fixedCssCode } = replaceImportsInInlineCssCode({
                cssCode,
                "buildOptions": {
                    "isStandalone": false,
                    "urlOrigin": "https://demo-app.keycloakify.dev",
                    "urlPathname": undefined
                }
            });

            const fixedCssCodeExpected = `
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(https://demo-app.keycloakify.dev/fonts/WorkSans/worksans-regular-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(https://demo-app.keycloakify.dev/fonts/WorkSans/worksans-medium-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url(https://demo-app.keycloakify.dev/fonts/WorkSans/worksans-semibold-webfont.woff2)
                format("woff2");
            }
            @font-face {
              font-family: "Work Sans";
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(https://demo-app.keycloakify.dev/fonts/WorkSans/worksans-bold-webfont.woff2)
                format("woff2");
            }
        `;

            expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);
        });
    });

    describe("with url pathName", () => {
        const cssCode = `
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/x/y/z/fonts/WorkSans/worksans-regular-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/x/y/z/fonts/WorkSans/worksans-medium-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/x/y/z/fonts/WorkSans/worksans-semibold-webfont.woff2") format("woff2");
        }
        @font-face {
          font-family: "Work Sans";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/x/y/z/fonts/WorkSans/worksans-bold-webfont.woff2") format("woff2");
        }
    `;
        it("transforms css for standalone app properly", () => {
            const { fixedCssCode } = replaceImportsInInlineCssCode({
                cssCode,
                "buildOptions": {
                    "isStandalone": true,
                    "urlPathname": "/x/y/z/"
                }
            });

            const fixedCssCodeExpected = `
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-regular-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-medium-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-semibold-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(\${url.resourcesPath}/build/fonts/WorkSans/worksans-bold-webfont.woff2)
                    format("woff2");
                }
            `;

            expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);
        });
        it("transforms css for external app properly", () => {
            const { fixedCssCode } = replaceImportsInInlineCssCode({
                cssCode,
                "buildOptions": {
                    "isStandalone": false,
                    "urlOrigin": "https://demo-app.keycloakify.dev",
                    "urlPathname": "/x/y/z/"
                }
            });

            const fixedCssCodeExpected = `
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(https://demo-app.keycloakify.dev/x/y/z/fonts/WorkSans/worksans-regular-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 500;
                  font-display: swap;
                  src: url(https://demo-app.keycloakify.dev/x/y/z/fonts/WorkSans/worksans-medium-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 600;
                  font-display: swap;
                  src: url(https://demo-app.keycloakify.dev/x/y/z/fonts/WorkSans/worksans-semibold-webfont.woff2)
                    format("woff2");
                }
                @font-face {
                  font-family: "Work Sans";
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(https://demo-app.keycloakify.dev/x/y/z/fonts/WorkSans/worksans-bold-webfont.woff2)
                    format("woff2");
                }
            `;

            expect(isSameCode(fixedCssCode, fixedCssCodeExpected)).toBe(true);
        });
    });
});
