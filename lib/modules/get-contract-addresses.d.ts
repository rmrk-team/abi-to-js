type GetContractAddressesArgs = {
    contractKeys: Record<string, string>;
    contractName: string;
    evmRmrkContracts: Record<string, Record<string, `0x${string}`>>;
    networks: Record<string, string>;
};
export declare const getContractAddresses: ({ contractKeys, contractName, evmRmrkContracts, networks, }: GetContractAddressesArgs) => Record<string, `0x${string}`> | undefined;
export {};
