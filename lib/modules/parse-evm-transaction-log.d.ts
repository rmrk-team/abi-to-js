import { ethers } from 'ethers';
interface ParseEvmTransactionLogArgs {
    contract: ethers.Contract;
    error: {
        data?: {
            data?: any;
        };
    };
}
export declare const parseEvmTransactionLog: ({ error, contract }: ParseEvmTransactionLogArgs) => Record<string, any> | null;
export {};
