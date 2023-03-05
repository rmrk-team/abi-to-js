import { ContractEntity } from '../types/ContractEntity';
export declare const buildHooksImplementationString: ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, inputs, outputs, name, stateMutability, }: ContractEntity & {
    abiToJsImportPath: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`> | undefined;
    contractName: string;
}) => string;
