

import * as fs from "fs";
import * as path from "path";
import { crawl } from "./crawl";

/** Apply a transformation function to every file of directory */
export function transformCodebase(
    params: {
        srcDirPath: string;
        destDirPath: string;
        transformSourceCodeString: (params: {
            sourceCode: Buffer;
            filePath: string;
        }) => {
            modifiedSourceCode: Buffer;
            newFileName?: string;
        } | undefined;
    }
) {

    const { srcDirPath, destDirPath, transformSourceCodeString } = params;

    for (const file_relative_path of crawl(srcDirPath)) {

        const filePath = path.join(srcDirPath, file_relative_path);

        const transformSourceCodeStringResult = transformSourceCodeString({
            "sourceCode": fs.readFileSync(filePath),
            "filePath": path.join(srcDirPath, file_relative_path)
        });

        if (transformSourceCodeStringResult === undefined) {
            continue;
        }

        fs.mkdirSync(
            path.dirname(
                path.join(
                    destDirPath,
                    file_relative_path
                )
            ),
            { "recursive": true }
        );

        const { newFileName, modifiedSourceCode } = transformSourceCodeStringResult;

        fs.writeFileSync(
            path.join(
                path.dirname(path.join(destDirPath, file_relative_path)),
                newFileName ?? path.basename(file_relative_path)
            ),
            modifiedSourceCode
        );

    }


}

