import { BigNumber, BigNumberish } from "@ethersproject-bsc/bignumber";
import { BytesLike, SignatureLike } from "@ethersproject-bsc/bytes";
export declare type AccessList = Array<{
    address: string;
    storageKeys: Array<string>;
}>;
export declare type AccessListish = AccessList | Array<[string, Array<string>]> | Record<string, Array<string>>;
export declare type UnsignedTransaction = {
    to?: string;
    nonce?: number;
    gasLimit?: BigNumberish;
    gasPrice?: BigNumberish;
    data?: BytesLike;
    value?: BigNumberish;
    chainId?: number;
    type?: number | null;
    accessList?: AccessListish;
};
export interface Transaction {
    hash?: string;
    to?: string;
    from?: string;
    nonce: number;
    gasLimit: BigNumber;
    gasPrice: BigNumber;
    data: string;
    value: BigNumber;
    chainId: number;
    r?: string;
    s?: string;
    v?: number;
    type?: number | null;
    accessList?: AccessList;
}
export declare function computeAddress(key: BytesLike | string): string;
export declare function recoverAddress(digest: BytesLike, signature: SignatureLike): string;
export declare function accessListify(value: AccessListish): AccessList;
export declare function serialize(transaction: UnsignedTransaction, signature?: SignatureLike): string;
export declare function parse(rawTransaction: BytesLike): Transaction;
//# sourceMappingURL=index.d.ts.map