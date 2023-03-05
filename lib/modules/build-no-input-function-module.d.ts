type BuildNoInputFunctionModuleArgs = {
    abiToJsImportPath: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractName: string;
    name: string;
};
export declare const buildNoInputFunctionModule: ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, name, }: BuildNoInputFunctionModuleArgs) => string;
export {};
