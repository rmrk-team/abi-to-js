import { ContractEntity } from '../types/ContractEntity';
export declare const buildFunctionImplementationString: ({ abiToJsImportPath, contractAddress, contractName, contractAbiDir, name, inputs, stateMutability, }: ContractEntity & {
    abiToJsImportPath: string;
    contractName: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`> | undefined;
}) => string;
