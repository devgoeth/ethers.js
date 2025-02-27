import { concat, hexlify } from "@ethersproject-bsc/bytes";
import { nameprep, toUtf8Bytes } from "@ethersproject-bsc/strings";
import { keccak256 } from "@ethersproject-bsc/keccak256";

import { Logger } from "@ethersproject-bsc/logger";
import { version } from "./_version";
const logger = new Logger(version);

const Zeros = new Uint8Array(32);
Zeros.fill(0);

const Partition = new RegExp("^((.*)\\.)?([^.]+)$");

export function isValidName(name: string): boolean {
    try {
        const comps = name.split(".");
        for (let i = 0; i < comps.length; i++) {
            if (nameprep(comps[i]).length === 0) {
                throw new Error("empty")
            }
        }
        return true;
    } catch (error) { }
    return false;
}

export function namehash(name: string): string {
    /* istanbul ignore if */
    if (typeof(name) !== "string") {
        logger.throwArgumentError("invalid address - " + String(name), "name", name);
    }

    let result: string | Uint8Array = Zeros;
    while (name.length) {
        const partition = name.match(Partition);
        const label = toUtf8Bytes(nameprep(partition[3]));
        result = keccak256(concat([result, keccak256(label)]));

        name = partition[2] || "";
    }

    return hexlify(result);
}

