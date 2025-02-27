"use strict";
import { getAddress } from "@ethersproject-bsc/address";
import { hexZeroPad } from "@ethersproject-bsc/bytes";
import { Coder } from "./abstract-coder";
export class AddressCoder extends Coder {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, value) {
        try {
            getAddress(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return getAddress(hexZeroPad(reader.readValue().toHexString(), 20));
    }
}
//# sourceMappingURL=address.js.map