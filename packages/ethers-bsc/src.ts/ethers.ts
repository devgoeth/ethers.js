"use strict";

import { BaseContract, Contract, ContractFactory } from "@ethersproject-bsc/contracts";

import { BigNumber, FixedNumber } from "@ethersproject-bsc/bignumber";

import { Signer, VoidSigner } from "@ethersproject-bsc/abstract-signer";
import { Wallet } from "@ethersproject-bsc/wallet";

import * as constants from "@ethersproject-bsc/constants";

import * as providers from "@ethersproject-bsc/providers";
import { getDefaultProvider } from "@ethersproject-bsc/providers";

import { Wordlist, wordlists} from "@ethersproject-bsc/wordlists";

import * as utils from "./utils";

import { ErrorCode as errors, Logger } from "@ethersproject-bsc/logger";

////////////////////////
// Types

import { BigNumberish } from "@ethersproject-bsc/bignumber";
import { Bytes, BytesLike, Signature } from "@ethersproject-bsc/bytes";
import { Transaction, UnsignedTransaction } from "@ethersproject-bsc/transactions";


////////////////////////
// Compile-Time Constants

// This is generated by "npm run dist"
import { version } from "./_version";

const logger = new Logger(version);

////////////////////////
// Types

import {
    ContractFunction,
    ContractReceipt,
    ContractTransaction,

    Event,
    EventFilter,

    Overrides,
    PayableOverrides,
    CallOverrides,

    PopulatedTransaction,

    ContractInterface
} from "@ethersproject-bsc/contracts";


////////////////////////
// Exports

export {
    Signer,

    Wallet,
    VoidSigner,

    getDefaultProvider,
    providers,

    BaseContract,
    Contract,
    ContractFactory,

    BigNumber,
    FixedNumber,

    constants,
    errors,

    logger,

    utils,

    wordlists,


    ////////////////////////
    // Compile-Time Constants

    version,


    ////////////////////////
    // Types

    ContractFunction,
    ContractReceipt,
    ContractTransaction,
    Event,
    EventFilter,

    Overrides,
    PayableOverrides,
    CallOverrides,

    PopulatedTransaction,

    ContractInterface,

    BigNumberish,

    Bytes,
    BytesLike,

    Signature,

    Transaction,
    UnsignedTransaction,

    Wordlist
};

