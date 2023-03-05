export type FileToWrite = {
    contractName?: string;
    fileName: string;
    name: string;
    filePath: string;
    fileContent: string;
    hasArgs?: boolean;
    hasReturn?: boolean;
    isMutable?: boolean;
};
