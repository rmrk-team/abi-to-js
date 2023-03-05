import { ContractEntity } from './ContractEntity';
export type AbiItemToParse = [string, readonly Partial<ContractEntity>[], string] | [string, readonly Partial<ContractEntity>[], string, undefined] | [string, readonly Partial<ContractEntity>[], string, Record<string, `0x${string}`>];
