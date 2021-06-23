
import type { KcContextBase } from "../KcContextBase";
import { getEvtKcLanguage } from "../../i18n/useKcLanguageTag";
import { getKcLanguageTagLabel } from "../../i18n/KcLanguageTag";
//NOTE: Aside because we want to be able to import them from node
import { resourcesCommonPath, resourcesPath } from "./urlResourcesPath";
import { id } from "tsafe/id";

export const kcContextCommonMock: KcContextBase.Common = {
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
	kcContextCommonMock.locale!,
	"current",
	{
		"get": () => getKcLanguageTagLabel(getEvtKcLanguage().state),
		"enumerable": true
	}
);

const loginUrl = {
	...kcContextCommonMock.url,
	"loginResetCredentialsUrl": "/auth/realms/myrealm/login-actions/reset-credentials?client_id=account&tab_id=HoAx28ja4xg",
	"registrationUrl": "/auth/realms/myrealm/login-actions/registration?client_id=account&tab_id=HoAx28ja4xg"
};

export const kcContextMocks: KcContextBase[] = [
	id<KcContextBase.Login>({
		...kcContextCommonMock,
		"pageId": "login.ftl",
		"url": loginUrl,
		"realm": {
			...kcContextCommonMock.realm,
			"loginWithEmailAllowed": true,
			"rememberMe": true,
			"password": true,
			"resetPasswordAllowed": true,
			"registrationAllowed": true
		},
		"auth": kcContextCommonMock.auth!,
		"social": {
			"displayInfo": true
		},
		"usernameEditDisabled": false,
		"login": {
			"rememberMe": false
		},
		"registrationDisabled": false,

	}),
	id<KcContextBase.Register>({
		...kcContextCommonMock,
		"pageId": "register.ftl",
		"url": {
			...loginUrl,
			"registrationAction": "http://localhost:8080/auth/realms/myrealm/login-actions/registration?session_code=gwZdUeO7pbYpFTRxiIxRg_QtzMbtFTKrNu6XW_f8asM&execution=12146ce0-b139-4bbd-b25b-0eccfee6577e&client_id=account&tab_id=uS8lYfebLa0"
		},
		"messagesPerField": {
			"printIfExists": (...[, x]) => x
		},
		"scripts": [],
		"isAppInitiatedAction": false,
		"register": {
			"formData": {}
		},
		"passwordRequired": true,
		"recaptchaRequired": false,
		"social": {
			"displayInfo": true
		},

	}),
	id<KcContextBase.Info>({
		...kcContextCommonMock,
		"pageId": "info.ftl",
		"messageHeader": "<Message header>",
		"requiredActions": undefined,
		"skipLink": false,
		"actionUri": "#",
		"client": {
			"baseUrl": "#"
		}

	}),
	id<KcContextBase.Error>({
		...kcContextCommonMock,
		"pageId": "error.ftl",
		"client": {
			"baseUrl": "#"
		}
	}),
	id<KcContextBase.LoginResetPassword>({
		...kcContextCommonMock,
		"pageId": "login-reset-password.ftl",
		"realm": {
			...kcContextCommonMock.realm,
			"loginWithEmailAllowed": false
		}

	}),
	id<KcContextBase.LoginVerifyEmail>({
		...kcContextCommonMock,
		"pageId": "login-verify-email.ftl"
	}),
	id<KcContextBase.Terms>({
		...kcContextCommonMock,
		"pageId": "terms.ftl"

	}),
	id<KcContextBase.LoginOtp>({
		...kcContextCommonMock,
		"pageId": "login-otp.ftl",
		"otpLogin": {
			"userOtpCredentials": [
				{
					"id": "id1",
					"userLabel": "label1"
				},
				{
					"id": "id2",
					"userLabel": "label2"
				}
			]
		}

	}),
	id<KcContextBase.LoginUpdateProfile>({
		...kcContextCommonMock,
		"pageId": "login-update-profile.ftl",
		"user": {
			"editUsernameAllowed": true,
			"username": "anUsername",
			"email": "foo@example.com",
			"firstName": "aFirstName",
			"lastName": "aLastName"
		},
		"messagesPerField": {
			"printIfExists": () => undefined
		}
	}),
	id<KcContextBase.LoginIdpLinkConfirm>({
		...kcContextCommonMock,
		"pageId": "login-idp-link-confirm.ftl",
		"idpAlias": "FranceConnect"
	})
];
