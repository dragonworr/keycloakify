#!/usr/bin/env node

import { downloadBuiltinKeycloakTheme } from "./download-builtin-keycloak-theme";
import { keycloakThemeEmailDirPath } from "./keycloakify";
import { join as pathJoin, basename as pathBasename } from "path";
import { transformCodebase } from "./tools/transformCodebase";
import { promptKeycloakVersion } from "./promptKeycloakVersion";
import * as fs from "fs";
import { getCliOptions } from "./tools/cliOptions";
import { getLogger } from "./tools/logger";

if (require.main === module) {
    (async () => {
        const { isSilent } = getCliOptions(process.argv.slice(2));
        const logger = getLogger({ isSilent });
        if (fs.existsSync(keycloakThemeEmailDirPath)) {
            logger.warn(`There is already a ./${pathBasename(keycloakThemeEmailDirPath)} directory in your project. Aborting.`);

            process.exit(-1);
        }

        const { keycloakVersion } = await promptKeycloakVersion();

        const builtinKeycloakThemeTmpDirPath = pathJoin(keycloakThemeEmailDirPath, "..", "tmp_xIdP3_builtin_keycloak_theme");

        downloadBuiltinKeycloakTheme({
            keycloakVersion,
            "destDirPath": builtinKeycloakThemeTmpDirPath,
            isSilent
        });

        transformCodebase({
            "srcDirPath": pathJoin(builtinKeycloakThemeTmpDirPath, "base", "email"),
            "destDirPath": keycloakThemeEmailDirPath
        });

        logger.log(`./${pathBasename(keycloakThemeEmailDirPath)} ready to be customized`);

        fs.rmSync(builtinKeycloakThemeTmpDirPath, { "recursive": true, "force": true });
    })();
}
