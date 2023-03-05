import { ContractEntity } from '../types/ContractEntity';
type BuildFunctionsListArgs = {
    abi: readonly Partial<ContractEntity>[];
};
export declare const buildFunctionsList: ({ abi }: BuildFunctionsListArgs) => ContractEntity[];
export {};
