import { basename as pathBasename, join as pathJoin } from "path";
import { execSync } from "child_process";
import * as fs from "fs";
import { transformCodebase } from "./transformCodebase";
import { rm, rm_rf } from "./rm";
import * as crypto from "crypto";

/** assert url ends with .zip */
export function downloadAndUnzip(params: {
    isSilent: boolean;
    url: string;
    destDirPath: string;
    pathOfDirToExtractInArchive?: string;
    cacheDirPath: string;
}) {
    const { url, destDirPath, pathOfDirToExtractInArchive, cacheDirPath } = params;

    const extractDirPath = pathJoin(
        cacheDirPath,
        `_${crypto.createHash("sha256").update(JSON.stringify({ url, pathOfDirToExtractInArchive })).digest("hex").substring(0, 15)}`
    );

    fs.mkdirSync(cacheDirPath, { "recursive": true });

    const { readIsSuccessByExtractDirPath, writeIsSuccessByExtractDirPath } = (() => {
        const filePath = pathJoin(cacheDirPath, "isSuccessByExtractDirPath.json");

        type IsSuccessByExtractDirPath = Record<string, boolean | undefined>;

        function readIsSuccessByExtractDirPath(): IsSuccessByExtractDirPath {
            if (!fs.existsSync(filePath)) {
                return {};
            }

            return JSON.parse(fs.readFileSync(filePath).toString("utf8"));
        }

        function writeIsSuccessByExtractDirPath(isSuccessByExtractDirPath: IsSuccessByExtractDirPath): void {
            fs.writeFileSync(filePath, Buffer.from(JSON.stringify(isSuccessByExtractDirPath, null, 2), "utf8"));
        }

        return { readIsSuccessByExtractDirPath, writeIsSuccessByExtractDirPath };
    })();

    downloadAndUnzip: {
        const isSuccessByExtractDirPath = readIsSuccessByExtractDirPath();

        if (isSuccessByExtractDirPath[extractDirPath]) {
            break downloadAndUnzip;
        }

        writeIsSuccessByExtractDirPath({
            ...isSuccessByExtractDirPath,
            [extractDirPath]: false
        });

        rm_rf(extractDirPath);

        fs.mkdirSync(extractDirPath);

        const zipFileBasename = pathBasename(url);

        execSync(`curl -L ${url} -o ${zipFileBasename} ${params.isSilent ? "-s" : ""}`, { "cwd": extractDirPath });

        execSync(`unzip -o ${zipFileBasename}${pathOfDirToExtractInArchive === undefined ? "" : ` "${pathOfDirToExtractInArchive}/**/*"`}`, {
            "cwd": extractDirPath
        });

        rm(zipFileBasename, { "cwd": extractDirPath });

        writeIsSuccessByExtractDirPath({
            ...isSuccessByExtractDirPath,
            [extractDirPath]: true
        });
    }

    transformCodebase({
        "srcDirPath": pathOfDirToExtractInArchive === undefined ? extractDirPath : pathJoin(extractDirPath, pathOfDirToExtractInArchive),
        destDirPath
    });
}
