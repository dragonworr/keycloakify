import { dirname, relative, sep } from "path";
import { createWriteStream } from "fs";

import walk from "./walk";
import { ZipFile } from "yazl";
import { mkdir } from "fs/promises";
import trimIndent from "./trimIndent";

export type ZipEntry = { zipPath: string } & ({ fsPath: string } | { buffer: Buffer })
export type ZipEntryGenerator = AsyncGenerator<ZipEntry, void, unknown>

type CommonJarArgs = {
    groupId: string;
    artifactId: string;
    version: string;
}

export type JarStreamArgs = CommonJarArgs & {
    asyncPathGeneratorFn(): ZipEntryGenerator
}

export type JarArgs = CommonJarArgs & {
    targetPath: string;
    rootPath: string;
};


export async function jarStream({ groupId, artifactId, version, asyncPathGeneratorFn }: JarStreamArgs) {
    const manifestPath = "META-INF/MANIFEST.MF"
    const manifestData = Buffer.from(trimIndent`
            Manifest-Version: 1.0
            Archiver-Version: Plexus Archiver
            Created-By: Keycloakify
            Built-By: unknown
            Build-Jdk: 19.0.0
            `)

    const pomPropsPath = `META-INF/maven/${groupId}/${artifactId}/pom.properties`
    const pomPropsData = Buffer.from(trimIndent`
            # Generated by keycloakify
            # ${new Date()}
            artifactId=${artifactId}
            groupId=${groupId}
            version=${version}
            `)

    const zipFile = new ZipFile()

    for await (const entry of asyncPathGeneratorFn()) {
        if ("buffer" in entry) {
            zipFile.addBuffer(entry.buffer, entry.zipPath)
        } else if ("fsPath" in entry) {
            zipFile.addFile(entry.fsPath, entry.zipPath)
        }
    }

    zipFile.addBuffer(manifestData, manifestPath)
    zipFile.addBuffer(pomPropsData, pomPropsPath)

    zipFile.end()

    return zipFile
}


/**
 * Create a jar archive, using the resources found at `rootPath` (a directory) and write the
 * archive to `targetPath` (a file). Use `groupId`, `artifactId` and `version` to define
 * the contents of the pom.properties file which is going to be added to the archive.
 */
export default async function jar({ groupId, artifactId, version, rootPath, targetPath }: JarArgs) {
    await mkdir(dirname(targetPath), { recursive: true });

    const asyncPathGeneratorFn = (async function* (): ZipEntryGenerator {
        for await (const fsPath of walk(rootPath)) {
            const zipPath = relative(rootPath, fsPath).split(sep).join("/");
            yield ({ fsPath, zipPath })
        }
    })

    const zipFile = await jarStream({ groupId, artifactId, version, asyncPathGeneratorFn })

    await new Promise<void>(async (resolve, reject) => {
        zipFile.outputStream.pipe(createWriteStream(targetPath, { encoding: "binary" }))
            .on("close", () => resolve())
            .on("error", e => reject(e))
    });
}
