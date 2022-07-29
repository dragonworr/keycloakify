import { getProjectRoot } from "../../bin/tools/getProjectRoot.js";
import { join as pathJoin } from "path";
import { downloadAndUnzip } from "../../bin/tools/downloadAndUnzip";

export const sampleReactProjectDirPath = pathJoin(getProjectRoot(), "sample_react_project");

export function setupSampleReactProject() {
    downloadAndUnzip({
        "url": "https://github.com/garronej/keycloakify/releases/download/v0.0.1/sample_build_dir_and_package_json.zip",
        "destDirPath": sampleReactProjectDirPath,
    });
}
