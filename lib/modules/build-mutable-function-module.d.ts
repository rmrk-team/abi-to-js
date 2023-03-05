type BuildMutableFunctionModuleArgs = {
    abiToJsImportPath: string;
    argumentsIsObject: boolean;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractName: string;
    inputArgsValues: string[];
    name: string;
    shouldImportBigNumber?: boolean;
    useArgsType: string;
};
export declare const buildMutableFunctionModule: ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }: BuildMutableFunctionModuleArgs) => string;
export {};
