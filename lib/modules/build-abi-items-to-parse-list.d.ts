import { AbiItemToParse } from '../types/AbiItemToParse';
import { ContractEntity } from '../types/ContractEntity';
type BuildAbiItemsToParseListArgs = {
    contractKeys: Record<string, string>;
    evmRmrkContracts: Record<string, Record<string, `0x${string}`>>;
    items: [string, readonly Partial<ContractEntity>[], string][];
    networks: Record<string, string>;
};
export declare const buildAbiItemsToParseList: ({ contractKeys, evmRmrkContracts, items, networks, }: BuildAbiItemsToParseListArgs) => AbiItemToParse[];
export {};
