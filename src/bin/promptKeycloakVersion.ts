import { getLatestsSemVersionedTagFactory } from "./tools/octokit-addons/getLatestsSemVersionedTag";
import { Octokit } from "@octokit/rest";
import cliSelect from "cli-select";

export async function promptKeycloakVersion() {
    const { getLatestsSemVersionedTag } = (() => {
        const { octokit } = (() => {
            const githubToken = process.env.GITHUB_TOKEN;

            const octokit = new Octokit(githubToken === undefined ? undefined : { "auth": githubToken });

            return { octokit };
        })();

        const { getLatestsSemVersionedTag } = getLatestsSemVersionedTagFactory({ octokit });

        return { getLatestsSemVersionedTag };
    })();

    console.log("Initialize the directory with email template from which keycloak version?");

    const { value: keycloakVersion } = await cliSelect<string>({
        "values": await getLatestsSemVersionedTag({
            "count": 15,
            "doIgnoreBeta": true,
            "owner": "keycloak",
            "repo": "keycloak",
        }).then(arr => arr.map(({ tag }) => tag)),
    }).catch(() => {
        console.log("Aborting");

        process.exit(-1);
    });

    console.log(keycloakVersion);

    return { keycloakVersion };
}
