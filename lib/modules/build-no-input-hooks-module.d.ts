type BuildNoInputHooksModuleArgs = {
    abiToJsImportPath: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractName: string;
    name: string;
    shouldImportBigNumber?: boolean;
};
export declare const buildNoInputHooksModule: ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, name, }: BuildNoInputHooksModuleArgs) => string;
export {};
