import React from "react";
import type { KcContextBase } from "../kcContext";
import type { PageProps } from "../KcProps";
import type { I18nBase } from "../i18n";

export default function LoginVerifyEmail(props: PageProps<KcContextBase.LoginVerifyEmail, I18nBase>) {
    const { kcContext, i18n, doFetchDefaultThemeResources = true, Template, ...kcProps } = props;

    const { msg } = i18n;

    const { url, user } = kcContext;

    return (
        <Template
            {...{ kcContext, i18n, doFetchDefaultThemeResources, ...kcProps }}
            displayMessage={false}
            headerNode={msg("emailVerifyTitle")}
            formNode={
                <>
                    <p className="instruction">{msg("emailVerifyInstruction1", user?.email)}</p>
                    <p className="instruction">
                        {msg("emailVerifyInstruction2")}
                        <br />
                        <a href={url.loginAction}>{msg("doClickHere")}</a>
                        &nbsp;
                        {msg("emailVerifyInstruction3")}
                    </p>
                </>
            }
        />
    );
}
