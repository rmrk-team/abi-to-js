type BuildViewOnlyFunctionModuleArgs = {
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
export declare const buildViewOnlyFunctionModule: ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }: BuildViewOnlyFunctionModuleArgs) => string;
export {};
