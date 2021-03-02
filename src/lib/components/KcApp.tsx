
import { memo } from "react";
import { kcContext } from "../kcContext";
import { assert } from "evt/tools/typeSafety/assert";
import type { KcPagesProperties } from "./KcProperties";
import { Login } from "./Login";

export type KcAppProps = {
    kcProperties?: KcPagesProperties;
};

export const KcApp = memo((props: KcAppProps) => {

    const { kcProperties } = props;

    assert(kcContext !== undefined, "App is not currently served by a Keycloak server");

    switch (kcContext.pageBasename) {
        case "login.ftl": return <Login kcProperties={kcProperties} />
        case "register.ftl":
            alert(`TODO: Implement ${kcContext.pageBasename}`);
            return null;
    }

});