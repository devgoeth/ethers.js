"use strict";

import { EC } from "./elliptic";

import { arrayify, BytesLike, hexlify, hexZeroPad, Signature, SignatureLike, splitSignature } from "@ethersproject-bsc/bytes";
import { defineReadOnly } from "@ethersproject-bsc/properties";

import { Logger } from "@ethersproject-bsc/logger";
import { version } from "./_version";
const logger = new Logger(version);

let _curve: EC = null
function getCurve() {
    if (!_curve) {
        _curve = new EC("secp256k1");
    }
    return _curve;
}

export class SigningKey {

    readonly curve: string;

    readonly privateKey: string;
    readonly publicKey: string;
    readonly compressedPublicKey: string;

    //readonly address: string;

    readonly _isSigningKey: boolean;

    constructor(privateKey: BytesLike) {
        defineReadOnly(this, "curve", "secp256k1");

        defineReadOnly(this, "privateKey", hexlify(privateKey));

        const keyPair = getCurve().keyFromPrivate(arrayify(this.privateKey));

        defineReadOnly(this, "publicKey", "0x" + keyPair.getPublic(false, "hex"));
        defineReadOnly(this, "compressedPublicKey", "0x" + keyPair.getPublic(true, "hex"));

        defineReadOnly(this, "_isSigningKey", true);
    }

    _addPoint(other: BytesLike): string {
        const p0 =  getCurve().keyFromPublic(arrayify(this.publicKey));
        const p1 =  getCurve().keyFromPublic(arrayify(other));
        return "0x" + p0.pub.add(p1.pub).encodeCompressed("hex");
    }

    signDigest(digest: BytesLike): Signature {
        const keyPair = getCurve().keyFromPrivate(arrayify(this.privateKey));
        const digestBytes = arrayify(digest);
        if (digestBytes.length !== 32) {
            logger.throwArgumentError("bad digest length", "digest", digest);
        }
        const signature = keyPair.sign(digestBytes, { canonical: true });
        return splitSignature({
            recoveryParam: signature.recoveryParam,
            r: hexZeroPad("0x" + signature.r.toString(16), 32),
            s: hexZeroPad("0x" + signature.s.toString(16), 32),
        })
    }

    computeSharedSecret(otherKey: BytesLike): string {
        const keyPair = getCurve().keyFromPrivate(arrayify(this.privateKey));
        const otherKeyPair = getCurve().keyFromPublic(arrayify(computePublicKey(otherKey)));
        return hexZeroPad("0x" + keyPair.derive(otherKeyPair.getPublic()).toString(16), 32);
    }

    static isSigningKey(value: any): value is SigningKey {
        return !!(value && value._isSigningKey);
    }
}

export function recoverPublicKey(digest: BytesLike, signature: SignatureLike): string {
    const sig = splitSignature(signature);
    const rs = { r: arrayify(sig.r), s: arrayify(sig.s) };
    return "0x" + getCurve().recoverPubKey(arrayify(digest), rs, sig.recoveryParam).encode("hex", false);
}

export function computePublicKey(key: BytesLike, compressed?: boolean): string {
    const bytes = arrayify(key);

    if (bytes.length === 32) {
        const signingKey = new SigningKey(bytes);
        if (compressed) {
            return "0x" + getCurve().keyFromPrivate(bytes).getPublic(true, "hex");
        }
        return signingKey.publicKey;

    } else if (bytes.length === 33) {
        if (compressed) { return hexlify(bytes); }
        return "0x" + getCurve().keyFromPublic(bytes).getPublic(false, "hex");

    } else if (bytes.length === 65) {
        if (!compressed) { return hexlify(bytes); }
        return "0x" + getCurve().keyFromPublic(bytes).getPublic(true, "hex");
    }

    return logger.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}

