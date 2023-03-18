import { lazy, Suspense } from "react";
import type { KcContext } from "keycloakify/kcContext";
import type { PageProps } from "keycloakify/pages/PageProps";
import type { I18n } from "keycloakify/i18n";

const Login = lazy(() => import("keycloakify/pages/Login"));
const Register = lazy(() => import("keycloakify/pages/Register"));
const RegisterUserProfile = lazy(() => import("keycloakify/pages/RegisterUserProfile"));
const Info = lazy(() => import("keycloakify/pages/Info"));
const Error = lazy(() => import("keycloakify/pages/Error"));
const LoginResetPassword = lazy(() => import("keycloakify/pages/LoginResetPassword"));
const LoginVerifyEmail = lazy(() => import("keycloakify/pages/LoginVerifyEmail"));
const Terms = lazy(() => import("keycloakify/pages/Terms"));
const LoginOtp = lazy(() => import("keycloakify/pages/LoginOtp"));
const LoginPassword = lazy(() => import("keycloakify/pages/LoginPassword"));
const LoginUsername = lazy(() => import("keycloakify/pages/LoginUsername"));
const WebauthnAuthenticate = lazy(() => import("keycloakify/pages/WebauthnAuthenticate"));
const LoginUpdatePassword = lazy(() => import("keycloakify/pages/LoginUpdatePassword"));
const LoginUpdateProfile = lazy(() => import("keycloakify/pages/LoginUpdateProfile"));
const LoginIdpLinkConfirm = lazy(() => import("keycloakify/pages/LoginIdpLinkConfirm"));
const LoginPageExpired = lazy(() => import("keycloakify/pages/LoginPageExpired"));
const LoginIdpLinkEmail = lazy(() => import("keycloakify/pages/LoginIdpLinkEmail"));
const LoginConfigTotp = lazy(() => import("keycloakify/pages/LoginConfigTotp"));
const LogoutConfirm = lazy(() => import("keycloakify/pages/LogoutConfirm"));
const UpdateUserProfile = lazy(() => import("keycloakify/pages/UpdateUserProfile"));
const IdpReviewUserProfile = lazy(() => import("keycloakify/pages/IdpReviewUserProfile"));

export default function Fallback(props: PageProps<KcContext, I18n>) {
    const { kcContext, ...rest } = props;

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        return <Login kcContext={kcContext} {...rest} />;
                    case "register.ftl":
                        return <Register kcContext={kcContext} {...rest} />;
                    case "register-user-profile.ftl":
                        return <RegisterUserProfile kcContext={kcContext} {...rest} />;
                    case "info.ftl":
                        return <Info kcContext={kcContext} {...rest} />;
                    case "error.ftl":
                        return <Error kcContext={kcContext} {...rest} />;
                    case "login-reset-password.ftl":
                        return <LoginResetPassword kcContext={kcContext} {...rest} />;
                    case "login-verify-email.ftl":
                        return <LoginVerifyEmail kcContext={kcContext} {...rest} />;
                    case "terms.ftl":
                        return <Terms kcContext={kcContext} {...rest} />;
                    case "login-otp.ftl":
                        return <LoginOtp kcContext={kcContext} {...rest} />;
                    case "login-username.ftl":
                        return <LoginUsername kcContext={kcContext} {...rest} />;
                    case "login-password.ftl":
                        return <LoginPassword kcContext={kcContext} {...rest} />;
                    case "webauthn-authenticate.ftl":
                        return <WebauthnAuthenticate kcContext={kcContext} {...rest} />;
                    case "login-update-password.ftl":
                        return <LoginUpdatePassword kcContext={kcContext} {...rest} />;
                    case "login-update-profile.ftl":
                        return <LoginUpdateProfile kcContext={kcContext} {...rest} />;
                    case "login-idp-link-confirm.ftl":
                        return <LoginIdpLinkConfirm kcContext={kcContext} {...rest} />;
                    case "login-idp-link-email.ftl":
                        return <LoginIdpLinkEmail kcContext={kcContext} {...rest} />;
                    case "login-page-expired.ftl":
                        return <LoginPageExpired kcContext={kcContext} {...rest} />;
                    case "login-config-totp.ftl":
                        return <LoginConfigTotp kcContext={kcContext} {...rest} />;
                    case "logout-confirm.ftl":
                        return <LogoutConfirm kcContext={kcContext} {...rest} />;
                    case "update-user-profile.ftl":
                        return <UpdateUserProfile kcContext={kcContext} {...rest} />;
                    case "idp-review-user-profile.ftl":
                        return <IdpReviewUserProfile kcContext={kcContext} {...rest} />;
                }
            })()}
        </Suspense>
    );
}
