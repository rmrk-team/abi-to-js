import { FileToWrite } from '../types/FileToWrite';
type WriteHooksModulesArgs = {
    contractName: string;
    filesToWrite: FileToWrite[];
    outDir: string;
};
export declare const writeHooksModules: ({ contractName, outDir, filesToWrite, }: WriteHooksModulesArgs) => void;
export {};
