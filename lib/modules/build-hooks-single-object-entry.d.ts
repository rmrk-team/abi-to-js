import { FileToWrite } from '../types/FileToWrite';
type BuildHooksSingleObjectEntryArgs = {
    filesToWrite: FileToWrite[];
    objectName: string;
};
/**
 * WithdrawRaisedArguments
 * WithdrawRaisedOptions
 * UseWithdrawRaisedReturnValue
 * @param filesToWrite
 * @param objectName
 */
export declare const buildHooksSingleObjectEntry: ({ filesToWrite, objectName, }: BuildHooksSingleObjectEntryArgs) => string;
export {};
