import { concat } from "@ethersproject-bsc/bytes";
import { keccak256 } from "@ethersproject-bsc/keccak256";
import { toUtf8Bytes } from "@ethersproject-bsc/strings";
export const messagePrefix = "\x19Ethereum Signed Message:\n";
export function hashMessage(message) {
    if (typeof (message) === "string") {
        message = toUtf8Bytes(message);
    }
    return keccak256(concat([
        toUtf8Bytes(messagePrefix),
        toUtf8Bytes(String(message.length)),
        message
    ]));
}
//# sourceMappingURL=message.js.map