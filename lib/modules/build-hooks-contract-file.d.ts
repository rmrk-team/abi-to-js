import { ContractEntity } from '../types/ContractEntity';
import { FileToWrite } from '@marketplaces/abi-to-js';
type BuildContractEntityFileArgs = {
    abiToJsImportPath: string;
    contractAbiDir: string;
    contractAddress?: Record<string, `0x${string}`>;
    contractEntity: ContractEntity;
    contractName: string;
    dir: string;
};
export declare const buildHooksContractFile: ({ abiToJsImportPath, contractAbiDir, contractAddress, contractEntity, contractName, dir, }: BuildContractEntityFileArgs) => FileToWrite;
export {};
