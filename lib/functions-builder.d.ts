import { AbiItemToParse } from './types/AbiItemToParse';
type FunctionsBuilderArgs = {
    abiList: AbiItemToParse[];
    indexEntryPostfix?: string;
    outDir: string;
    abiToJsImportPath?: string;
};
export declare const functionsBuilder: ({ abiList, indexEntryPostfix, outDir, abiToJsImportPath, }: FunctionsBuilderArgs) => void;
export {};
