import { keccak256 } from "@ethersproject-bsc/keccak256";
import { toUtf8Bytes } from "@ethersproject-bsc/strings";

export function id(text: string): string {
    return keccak256(toUtf8Bytes(text));
}
