
import { memo } from "react";
import type { KcContext } from "../KcContext";
import type { KcProps } from "./KcProps";
import { Login } from "./Login";
import { Register } from "./Register";
import { Info } from "./Info";
import { Error } from "./Error";
import { LoginResetPassword } from "./LoginResetPassword";
import { LoginVerifyEmail } from "./LoginVerifyEmail";

export const KcApp = memo(({ kcContext, ...props }: { kcContext: KcContext; } & KcProps ) => {
    switch (kcContext.pageId) {
        case "login.ftl": return <Login {...{ kcContext, ...props }} />;
        case "register.ftl": return <Register {...{ kcContext, ...props }} />;
        case "info.ftl": return <Info {...{ kcContext, ...props }} />;
        case "error.ftl": return <Error {...{ kcContext, ...props }} />;
        case "login-reset-password.ftl": return <LoginResetPassword {...{ kcContext, ...props }} />;
        case "login-verify-email.ftl": return <LoginVerifyEmail {...{ kcContext, ...props }} />;
    }
});