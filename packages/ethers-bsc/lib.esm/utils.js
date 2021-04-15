"use strict";
import { AbiCoder, checkResultErrors, defaultAbiCoder, EventFragment, FormatTypes, Fragment, FunctionFragment, Indexed, Interface, LogDescription, ParamType, TransactionDescription } from "@ethersproject-bsc/abi";
import { getAddress, getCreate2Address, getContractAddress, getIcapAddress, isAddress } from "@ethersproject-bsc/address";
import * as base64 from "@ethersproject-bsc/base64";
import { Base58 as base58 } from "@ethersproject-bsc/basex";
import { arrayify, concat, hexConcat, hexDataSlice, hexDataLength, hexlify, hexStripZeros, hexValue, hexZeroPad, isBytes, isBytesLike, isHexString, joinSignature, zeroPad, splitSignature, stripZeros } from "@ethersproject-bsc/bytes";
import { _TypedDataEncoder, hashMessage, id, isValidName, namehash } from "@ethersproject-bsc/hash";
import { defaultPath, entropyToMnemonic, HDNode, isValidMnemonic, mnemonicToEntropy, mnemonicToSeed } from "@ethersproject-bsc/hdnode";
import { getJsonWalletAddress } from "@ethersproject-bsc/json-wallets";
import { keccak256 } from "@ethersproject-bsc/keccak256";
import { Logger } from "@ethersproject-bsc/logger";
import { computeHmac, ripemd160, sha256, sha512 } from "@ethersproject-bsc/sha2";
import { keccak256 as solidityKeccak256, pack as solidityPack, sha256 as soliditySha256 } from "@ethersproject-bsc/solidity";
import { randomBytes, shuffled } from "@ethersproject-bsc/random";
import { checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy } from "@ethersproject-bsc/properties";
import * as RLP from "@ethersproject-bsc/rlp";
import { computePublicKey, recoverPublicKey, SigningKey } from "@ethersproject-bsc/signing-key";
import { formatBytes32String, nameprep, parseBytes32String, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs } from "@ethersproject-bsc/strings";
import { accessListify, computeAddress, parse as parseTransaction, recoverAddress, serialize as serializeTransaction } from "@ethersproject-bsc/transactions";
import { commify, formatEther, parseEther, formatUnits, parseUnits } from "@ethersproject-bsc/units";
import { verifyMessage, verifyTypedData } from "@ethersproject-bsc/wallet";
import { _fetchData, fetchJson, poll } from "@ethersproject-bsc/web";
////////////////////////
// Enums
import { SupportedAlgorithm } from "@ethersproject-bsc/sha2";
import { UnicodeNormalizationForm, Utf8ErrorReason } from "@ethersproject-bsc/strings";
////////////////////////
// Exports
export { AbiCoder, defaultAbiCoder, Fragment, EventFragment, FunctionFragment, ParamType, FormatTypes, checkResultErrors, Logger, RLP, _fetchData, fetchJson, poll, checkProperties, deepCopy, defineReadOnly, getStatic, resolveProperties, shallowCopy, arrayify, concat, stripZeros, zeroPad, isBytes, isBytesLike, defaultPath, HDNode, SigningKey, Interface, LogDescription, TransactionDescription, base58, base64, hexlify, isHexString, hexConcat, hexStripZeros, hexValue, hexZeroPad, hexDataLength, hexDataSlice, nameprep, _toEscapedUtf8String, toUtf8Bytes, toUtf8CodePoints, toUtf8String, Utf8ErrorFuncs, formatBytes32String, parseBytes32String, hashMessage, namehash, isValidName, id, _TypedDataEncoder, getAddress, getIcapAddress, getContractAddress, getCreate2Address, isAddress, formatEther, parseEther, formatUnits, parseUnits, commify, computeHmac, keccak256, ripemd160, sha256, sha512, randomBytes, shuffled, solidityPack, solidityKeccak256, soliditySha256, splitSignature, joinSignature, accessListify, parseTransaction, serializeTransaction, getJsonWalletAddress, computeAddress, recoverAddress, computePublicKey, recoverPublicKey, verifyMessage, verifyTypedData, mnemonicToEntropy, entropyToMnemonic, isValidMnemonic, mnemonicToSeed, 
////////////////////////
// Enums
SupportedAlgorithm, UnicodeNormalizationForm, Utf8ErrorReason, Indexed };
//# sourceMappingURL=utils.js.map