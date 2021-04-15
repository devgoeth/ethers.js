import { keccak256 } from "@ethersproject-bsc/keccak256";
import { toUtf8Bytes } from "@ethersproject-bsc/strings";
export function id(text) {
    return keccak256(toUtf8Bytes(text));
}
//# sourceMappingURL=id.js.map