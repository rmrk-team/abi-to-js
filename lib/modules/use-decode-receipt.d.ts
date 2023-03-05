import { ethers } from 'ethers';
type UseDecodeReceiptArgs = {
    contract?: ethers.Contract | null;
    receipt?: ethers.providers.TransactionReceipt | null;
};
export declare const useDecodeReceipt: ({ contract, receipt }: UseDecodeReceiptArgs) => void;
export {};
