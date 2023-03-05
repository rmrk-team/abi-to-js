import { ContractEntity } from '../types/ContractEntity';
type BuildContractEntityFileArgs = {
    abiToJsImportPath: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractEntity: ContractEntity;
    contractName: string;
    dir: string;
};
export declare const buildFunctionContractFile: ({ abiToJsImportPath, contractAbiDir, contractAddress, contractEntity, contractName, dir, }: BuildContractEntityFileArgs) => {
    name: string;
    fileName: string;
    filePath: string;
    fileContent: string;
};
export {};
