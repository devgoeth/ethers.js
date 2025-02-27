import { BigNumber, BigNumberish } from "@ethersproject-bsc/bignumber";
import { BytesLike } from "@ethersproject-bsc/bytes";
import { Description } from "@ethersproject-bsc/properties";
import { AbiCoder } from "./abi-coder";
import { checkResultErrors, Result } from "./coders/abstract-coder";
import { ConstructorFragment, EventFragment, Fragment, FunctionFragment, JsonFragment, ParamType } from "./fragments";
export { checkResultErrors, Result };
export declare class LogDescription extends Description<LogDescription> {
    readonly eventFragment: EventFragment;
    readonly name: string;
    readonly signature: string;
    readonly topic: string;
    readonly args: Result;
}
export declare class TransactionDescription extends Description<TransactionDescription> {
    readonly functionFragment: FunctionFragment;
    readonly name: string;
    readonly args: Result;
    readonly signature: string;
    readonly sighash: string;
    readonly value: BigNumber;
}
export declare class Indexed extends Description<Indexed> {
    readonly hash: string;
    readonly _isIndexed: boolean;
    static isIndexed(value: any): value is Indexed;
}
export declare class Interface {
    readonly fragments: ReadonlyArray<Fragment>;
    readonly errors: {
        [name: string]: any;
    };
    readonly events: {
        [name: string]: EventFragment;
    };
    readonly functions: {
        [name: string]: FunctionFragment;
    };
    readonly structs: {
        [name: string]: any;
    };
    readonly deploy: ConstructorFragment;
    readonly _abiCoder: AbiCoder;
    readonly _isInterface: boolean;
    constructor(fragments: string | ReadonlyArray<Fragment | JsonFragment | string>);
    format(format?: string): string | Array<string>;
    static getAbiCoder(): AbiCoder;
    static getAddress(address: string): string;
    static getSighash(functionFragment: FunctionFragment): string;
    static getEventTopic(eventFragment: EventFragment): string;
    getFunction(nameOrSignatureOrSighash: string): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: string): EventFragment;
    getSighash(functionFragment: FunctionFragment | string): string;
    getEventTopic(eventFragment: EventFragment | string): string;
    _decodeParams(params: ReadonlyArray<ParamType>, data: BytesLike): Result;
    _encodeParams(params: ReadonlyArray<ParamType>, values: ReadonlyArray<any>): string;
    encodeDeploy(values?: ReadonlyArray<any>): string;
    decodeFunctionData(functionFragment: FunctionFragment | string, data: BytesLike): Result;
    encodeFunctionData(functionFragment: FunctionFragment | string, values?: ReadonlyArray<any>): string;
    decodeFunctionResult(functionFragment: FunctionFragment | string, data: BytesLike): Result;
    encodeFunctionResult(functionFragment: FunctionFragment | string, values?: ReadonlyArray<any>): string;
    encodeFilterTopics(eventFragment: EventFragment, values: ReadonlyArray<any>): Array<string | Array<string>>;
    encodeEventLog(eventFragment: EventFragment, values: ReadonlyArray<any>): {
        data: string;
        topics: Array<string>;
    };
    decodeEventLog(eventFragment: EventFragment | string, data: BytesLike, topics?: ReadonlyArray<string>): Result;
    parseTransaction(tx: {
        data: string;
        value?: BigNumberish;
    }): TransactionDescription;
    parseLog(log: {
        topics: Array<string>;
        data: string;
    }): LogDescription;
    static isInterface(value: any): value is Interface;
}
//# sourceMappingURL=interface.d.ts.map