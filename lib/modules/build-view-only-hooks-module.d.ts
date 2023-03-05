type BuildViewOnlyHooksModuleArgs = {
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
export declare const buildViewOnlyHooksModule: ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }: BuildViewOnlyHooksModuleArgs) => string;
export {};
