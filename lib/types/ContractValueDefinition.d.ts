export type ContractValueDefinition = {
    name: string;
    internalType: string;
    type: string;
    components?: readonly ContractValueDefinition[];
};
