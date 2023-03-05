import { ethers } from 'ethers';
export type DecodedWagmiReceiptLog<RetrunArgs extends [any] = [any]> = {
    args: RetrunArgs;
    signature: string;
    eventFragment: {
        _isFragment: boolean;
        inputs: {
            arrayChildren: unknown;
            components: unknown;
            arrayLength: unknown;
            indexed: boolean;
            name: string;
            type: string;
            _isParamType: boolean;
            baseType: string;
        }[];
        name: string;
        anonymous: boolean;
        type: string;
    };
    name: string;
    topic: string;
};
export declare const decodeWagmiReceiptLogs: <RetrunArgs extends [any] = [any]>(contract: ethers.Contract, transactionReceipt: ethers.providers.TransactionReceipt) => (DecodedWagmiReceiptLog<[any]> | null)[];
