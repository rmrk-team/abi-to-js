type BuildMutableHookModuleArgs = {
    abiToJsImportPath: string;
    argumentsIsObject: boolean;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractName: string;
    inputArgsValues: string[];
    name: string;
    shouldImportBigNumber?: boolean;
    useArgsType: string;
    returnArgs: string;
};
export declare const buildMutableHookModule: ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, returnArgs, }: BuildMutableHookModuleArgs) => string;
export {};
