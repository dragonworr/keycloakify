import type { AccountThemePageId } from "keycloakify/bin/keycloakify/generateFtl";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";

export type KcContext = KcContext.Password | KcContext.Account;

export declare namespace KcContext {
    export type Common = {
        keycloakifyVersion: string;
        locale?: {
            supported: {
                url: string;
                label: string;
                languageTag: string;
            }[];
            currentLanguageTag: string;
        };
        url: {
            accountUrl: string;
            passwordUrl: string;
            totpUrl: string;
            socialUrl: string;
            sessionsUrl: string;
            applicationsUrl: string;
            logUrl: string;
            resourceUrl: string;
            resourcesCommonPath: string;
            resourcesPath: string;
            /** @deprecated, not present in recent keycloak version apparently, use kcContext.referrer instead */
            referrerURI?: string;
            // Present only if redirected to account page with ?referrer=xxx&referrer_uri=http...
            referrer?: {
                url: string; // The url of the App
                name: string; // NOTE: Client id
            };
            getLogoutUrl: () => string;
        };
        features: {
            passwordUpdateSupported: boolean;
            identityFederation: boolean;
            log: boolean;
            authorization: boolean;
        };
        realm: {
            internationalizationEnabled: boolean;
            userManagedAccessAllowed: boolean;
        };
        message?: {
            type: "success" | "warning" | "error" | "info";
            summary: string;
        };
        referrer?: {
            url?: string;
            name: string;
        };
        messagesPerField: {
            printIfExists: <T>(fieldName: string, x: T) => T | undefined;
            existsError: (fieldName: string) => boolean;
            get: (fieldName: string) => string;
            exists: (fieldName: string) => boolean;
        };
        account: {
            email?: string;
            firstName: string;
            lastName?: string;
            username?: string;
        };
    };

    export type Password = Common & {
        pageId: "password.ftl";
        password: {
            passwordSet: boolean;
        };
        stateChecker: string;
    };

    export type Account = Common & {
        pageId: "account.ftl";
        url: {
            accountUrl: string;
        };
        realm: {
            registrationEmailAsUsername: boolean;
            editUsernameAllowed: boolean;
        };
        stateChecker: string;
    };
}

assert<Equals<KcContext["pageId"], AccountThemePageId>>();
