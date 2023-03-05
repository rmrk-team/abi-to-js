import { ContractValueDefinition } from './ContractValueDefinition';
export type ContractEntity = {
    inputs: readonly ContractValueDefinition[];
    name: string;
    outputs: readonly ContractValueDefinition[];
    stateMutability: string;
    type: string;
};
