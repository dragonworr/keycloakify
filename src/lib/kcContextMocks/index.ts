

import type { KcContext } from "../KcContext";
import { getEvtKcLanguage } from "../i18n/useKcLanguageTag";
import { getKcLanguageTagLabel } from "../i18n/KcLanguageTag";
//NOTE: Aside because we want to be able to import them from node
import { resourcesCommonPath, resourcesPath } from "./urlResourcesPath";

export const kcTemplateContext: KcContext.Template = {
    "url": {
        "loginAction": "#",
        "resourcesPath": `${process.env["PUBLIC_URL"]}/${resourcesPath}`,
        "resourcesCommonPath": `${process.env["PUBLIC_URL"]}/${resourcesCommonPath}`,
        "loginRestartFlowUrl": "/auth/realms/myrealm/login-actions/restart?client_id=account&tab_id=HoAx28ja4xg",
        "loginUrl": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg",
    },
    "realm": {
        "displayName": "myrealm",
        "displayNameHtml": "myrealm",
        "internationalizationEnabled": true,
        "registrationEmailAsUsername": true,
    },
    "locale": {
        "supported": [
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=de",
                "languageTag": "de"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=no",
                "languageTag": "no"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ru",
                "languageTag": "ru"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=sv",
                "languageTag": "sv"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=pt-BR",
                "languageTag": "pt-BR"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=lt",
                "languageTag": "lt"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=en",
                "languageTag": "en"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=it",
                "languageTag": "it"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=fr",
                "languageTag": "fr"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=zh-CN",
                "languageTag": "zh-CN"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=es",
                "languageTag": "es"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=cs",
                "languageTag": "cs"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ja",
                "languageTag": "ja"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=sk",
                "languageTag": "sk"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=pl",
                "languageTag": "pl"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=ca",
                "languageTag": "ca"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=nl",
                "languageTag": "nl"
            },
            {
                "url": "/auth/realms/myrealm/login-actions/authenticate?client_id=account&tab_id=HoAx28ja4xg&execution=ee6c2834-46a4-4a20-a1b6-f6d6f6451b36&kc_locale=tr",
                "languageTag": "tr"
            }
        ],
        "current": null as any
    },
    "auth": {
        "showUsername": false,
        "showResetCredentials": false,
        "showTryAnotherWayLink": false
    },
    "scripts": [],
    "message": {
        "type": "success",
        "summary": "This is a test message"
    },
    "isAppInitiatedAction": false,
};

Object.defineProperty(
    kcTemplateContext.locale!,
    "current",
    {
        "get": () => getKcLanguageTagLabel(getEvtKcLanguage().state),
        "enumerable": true
    }
);

export const kcLoginContext: KcContext.Login = {
    ...kcTemplateContext,
    "pageId": "login.ftl",
    "url": {
        ...kcTemplateContext.url,
        "loginResetCredentialsUrl": "/auth/realms/myrealm/login-actions/reset-credentials?client_id=account&tab_id=HoAx28ja4xg",
        "registrationUrl": "/auth/realms/myrealm/login-actions/registration?client_id=account&tab_id=HoAx28ja4xg"
    },
    "realm": {
        ...kcTemplateContext.realm,
        "loginWithEmailAllowed": true,
        "rememberMe": true,
        "password": true,
        "resetPasswordAllowed": true,
        "registrationAllowed": true
    },
    "auth": kcTemplateContext.auth!,
    "social": {
        "displayInfo": true
    },
    "usernameEditDisabled": false,
    "login": {
        "rememberMe": false
    },
    "registrationDisabled": false,
};

export const kcRegisterContext: KcContext.Register = {
    ...kcTemplateContext,
    "url": {
        ...kcLoginContext.url,
        "registrationAction": "http://localhost:8080/auth/realms/myrealm/login-actions/registration?session_code=gwZdUeO7pbYpFTRxiIxRg_QtzMbtFTKrNu6XW_f8asM&execution=12146ce0-b139-4bbd-b25b-0eccfee6577e&client_id=account&tab_id=uS8lYfebLa0"
    },
    "messagesPerField": {
        "printIfExists": (...[,x]) => x
    },
    "scripts": [],
    "isAppInitiatedAction": false,
    "pageId": "register.ftl",
    "register": {
        "formData": {}
    },
    "passwordRequired": true,
    "recaptchaRequired": false
};

export const kcInfoContext: KcContext.Info ={
    ...kcTemplateContext,
    "pageId": "info.ftl",
    "messageHeader": "<Message header>",
    "requiredActions": undefined,
    "skipLink": false,
    "actionUri": "#",
    "client": {
        "baseUrl": "#"
    }
};

export const kcErrorContext: KcContext.Error = {
    ...kcTemplateContext,
    "pageId": "error.ftl",
    "client": {
        "baseUrl": "#"
    }
};

export const kcLoginResetPasswordContext: KcContext.LoginResetPassword = {
    ...kcTemplateContext,
    "pageId": "login-reset-password.ftl",
    "realm":{
        ...kcTemplateContext.realm,
        "loginWithEmailAllowed": false
    }
};

export const kcLoginVerifyEmailContext: KcContext.LoginVerifyEmail = {
    ...kcTemplateContext,
    "pageId": "login-verify-email.ftl"
};

