import type { KcContext } from "./KcContext";
import type { AndByDiscriminatingKey } from "../tools/AndByDiscriminatingKey";
import { ftlValuesGlobalName } from "../bin/keycloakify/ftlValuesGlobalName";

export type ExtendKcContext<KcContextExtension extends { pageId: string }> = [KcContextExtension] extends [never]
    ? KcContext
    : AndByDiscriminatingKey<"pageId", KcContextExtension & KcContext.Common, KcContext>;

export function getKcContextFromWindow<KcContextExtension extends { pageId: string } = never>(): ExtendKcContext<KcContextExtension> | undefined {
    return typeof window === "undefined" ? undefined : (window as any)[ftlValuesGlobalName];
}
