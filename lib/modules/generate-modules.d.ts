import { AbiItemToParse } from '../types/AbiItemToParse';
import { ContractEntity } from '../types/ContractEntity';
import { FileToWrite } from '../types/FileToWrite';
type GenerateModulesArgs = {
    abiToJsImportPath: string;
    abiList: AbiItemToParse[];
    buildContractFile: (args: {
        contractAddress?: Record<string, `0x${string}`>;
        contractEntity: ContractEntity;
        contractName: string;
        contractAbiDir: string;
        abiToJsImportPath: string;
        dir: string;
    }) => {
        fileName: string;
        filePath: string;
        name: string;
        fileContent: string;
    };
    indexEntryPostfix?: string;
    rootDir: string;
    writeModules: (args: {
        contractName: string;
        filesToWrite: FileToWrite[];
        outDir: string;
    }) => void;
};
export declare const generateModules: ({ abiToJsImportPath, indexEntryPostfix, abiList, buildContractFile, rootDir, writeModules, }: GenerateModulesArgs) => void;
export {};
