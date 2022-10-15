import React, { useEffect, memo } from "react";
import DefaultTemplate from "./Template";
import type { TemplateProps } from "./Template";
import type { KcProps } from "./KcProps";
import type { KcContextBase } from "../getKcContext/KcContextBase";
import { headInsert } from "../tools/headInsert";
import { pathJoin } from "../../bin/tools/pathJoin";
import { clsx } from "../tools/clsx";
import type { I18n } from "../i18n";

export type LoginOtpProps = KcProps & {
    kcContext: KcContextBase.LoginOtp;
    i18n: I18n;
    doFetchDefaultThemeResources?: boolean;
    Template?: (props: TemplateProps) => JSX.Element | null;
};

const LoginOtp = memo((props: LoginOtpProps) => {
    const { kcContext, i18n, doFetchDefaultThemeResources = true, Template = DefaultTemplate, ...kcProps } = props;

    const { otpLogin, url } = kcContext;

    const { msg, msgStr } = i18n;

    useEffect(() => {
        let isCleanedUp = false;

        headInsert({
            "type": "javascript",
            "src": pathJoin(kcContext.url.resourcesCommonPath, "node_modules/jquery/dist/jquery.min.js")
        }).then(() => {
            if (isCleanedUp) return;

            evaluateInlineScript();
        });

        return () => {
            isCleanedUp = true;
        };
    }, []);

    return (
        <Template
            {...{ kcContext, i18n, doFetchDefaultThemeResources, ...kcProps }}
            headerNode={msg("doLogIn")}
            formNode={
                <form id="kc-otp-login-form" className={clsx(kcProps.kcFormClass)} action={url.loginAction} method="post">
                    {otpLogin.userOtpCredentials.length > 1 && (
                        <div className={clsx(kcProps.kcFormGroupClass)}>
                            <div className={clsx(kcProps.kcInputWrapperClass)}>
                                {otpLogin.userOtpCredentials.map(otpCredential => (
                                    <div key={otpCredential.id} className={clsx(kcProps.kcSelectOTPListClass)}>
                                        <input type="hidden" value="${otpCredential.id}" />
                                        <div className={clsx(kcProps.kcSelectOTPListItemClass)}>
                                            <span className={clsx(kcProps.kcAuthenticatorOtpCircleClass)} />
                                            <h2 className={clsx(kcProps.kcSelectOTPItemHeadingClass)}>{otpCredential.userLabel}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={clsx(kcProps.kcFormGroupClass)}>
                        <div className={clsx(kcProps.kcLabelWrapperClass)}>
                            <label htmlFor="otp" className={clsx(kcProps.kcLabelClass)}>
                                {msg("loginOtpOneTime")}
                            </label>
                        </div>

                        <div className={clsx(kcProps.kcInputWrapperClass)}>
                            <input id="otp" name="otp" autoComplete="off" type="text" className={clsx(kcProps.kcInputClass)} autoFocus />
                        </div>
                    </div>

                    <div className={clsx(kcProps.kcFormGroupClass)}>
                        <div id="kc-form-options" className={clsx(kcProps.kcFormOptionsClass)}>
                            <div className={clsx(kcProps.kcFormOptionsWrapperClass)} />
                        </div>

                        <div id="kc-form-buttons" className={clsx(kcProps.kcFormButtonsClass)}>
                            <input
                                className={clsx(
                                    kcProps.kcButtonClass,
                                    kcProps.kcButtonPrimaryClass,
                                    kcProps.kcButtonBlockClass,
                                    kcProps.kcButtonLargeClass
                                )}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doLogIn")}
                            />
                        </div>
                    </div>
                </form>
            }
        />
    );
});

declare const $: any;

function evaluateInlineScript() {
    $(document).ready(function () {
        // Card Single Select
        $(".card-pf-view-single-select").click(function (this: any) {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).children().removeAttr("name");
            } else {
                $(".card-pf-view-single-select").removeClass("active");
                $(".card-pf-view-single-select").children().removeAttr("name");
                $(this).addClass("active");
                $(this).children().attr("name", "selectedCredentialId");
            }
        });

        var defaultCred = $(".card-pf-view-single-select")[0];
        if (defaultCred) {
            defaultCred.click();
        }
    });
}

export default LoginOtp;
