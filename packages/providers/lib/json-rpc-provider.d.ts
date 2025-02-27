import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject-bsc/abstract-provider";
import { Signer, TypedDataDomain, TypedDataField, TypedDataSigner } from "@ethersproject-bsc/abstract-signer";
import { Bytes } from "@ethersproject-bsc/bytes";
import { Network, Networkish } from "@ethersproject-bsc/networks";
import { Deferrable } from "@ethersproject-bsc/properties";
import { AccessList } from "@ethersproject-bsc/transactions";
import { ConnectionInfo } from "@ethersproject-bsc/web";
import { BaseProvider, Event } from "./base-provider";
export declare class JsonRpcSigner extends Signer implements TypedDataSigner {
    readonly provider: JsonRpcProvider;
    _index: number;
    _address: string;
    constructor(constructorGuard: any, provider: JsonRpcProvider, addressOrIndex?: string | number);
    connect(provider: Provider): JsonRpcSigner;
    connectUnchecked(): JsonRpcSigner;
    getAddress(): Promise<string>;
    sendUncheckedTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;
    signTransaction(transaction: Deferrable<TransactionRequest>): Promise<string>;
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
    signMessage(message: Bytes | string): Promise<string>;
    _signTypedData(domain: TypedDataDomain, types: Record<string, Array<TypedDataField>>, value: Record<string, any>): Promise<string>;
    unlock(password: string): Promise<boolean>;
}
declare class UncheckedJsonRpcSigner extends JsonRpcSigner {
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
}
export declare class JsonRpcProvider extends BaseProvider {
    readonly connection: ConnectionInfo;
    _pendingFilter: Promise<number>;
    _nextId: number;
    constructor(url?: ConnectionInfo | string, network?: Networkish);
    static defaultUrl(): string;
    detectNetwork(): Promise<Network>;
    getSigner(addressOrIndex?: string | number): JsonRpcSigner;
    getUncheckedSigner(addressOrIndex?: string | number): UncheckedJsonRpcSigner;
    listAccounts(): Promise<Array<string>>;
    send(method: string, params: Array<any>): Promise<any>;
    prepareRequest(method: string, params: any): [string, Array<any>];
    perform(method: string, params: any): Promise<any>;
    _startEvent(event: Event): void;
    _startPending(): void;
    _stopEvent(event: Event): void;
    static hexlifyTransaction(transaction: TransactionRequest, allowExtra?: {
        [key: string]: boolean;
    }): {
        [key: string]: string | AccessList;
    };
}
export {};
//# sourceMappingURL=json-rpc-provider.d.ts.map