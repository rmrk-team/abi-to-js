import { FileToWrite } from '../types/FileToWrite';
type BuildFunctionSingleObjectEntryArgs = {
    filesToWrite: FileToWrite[];
    objectName: string;
};
export declare const buildFunctionSingleObjectEntry: ({ filesToWrite, objectName, }: BuildFunctionSingleObjectEntryArgs) => string;
export {};
