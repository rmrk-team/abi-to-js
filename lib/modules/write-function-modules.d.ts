import { FileToWrite } from '../types/FileToWrite';
type WriteFunctionModulesArgs = {
    contractName: string;
    filesToWrite: FileToWrite[];
    outDir: string;
};
export declare const writeFunctionModules: ({ contractName, outDir, filesToWrite, }: WriteFunctionModulesArgs) => void;
export {};
