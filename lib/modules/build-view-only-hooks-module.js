"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildViewOnlyHooksModule = void 0;
const capitalize_1 = require("./capitalize");
const buildViewOnlyHooksModule = ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { Abi, Narrow } from 'abitype';
import { ContractFunction } from '@ethersproject/contracts';
import { ${shouldImportBigNumber ? 'BigNumber ,' : ''} ContractTransaction } from 'ethers';
import { useContractReads } from 'wagmi';

import { GetContractReturnType, UseQueryResult } from '${abiToJsImportPath}';
import { ${contractName} } from '${contractAbiDir}/${contractName}';

${useArgsType}

export type ${(0, capitalize_1.capitalize)(name)}Contract = {
  abi: typeof ${contractName};
  contractAddress: \`0x\${string}\`;
  functionName: '${name}';
};

export type ${(0, capitalize_1.capitalize)(name)}Options = {
  skip?: boolean;
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
} & Parameters<
  typeof useContractReads<typeof ${contractName}, '${name}', ${(0, capitalize_1.capitalize)(name)}Contract[]>
>[0];

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}

const createMapper = ({
                        chainId,
                        contractAddress,
                      }: {
  contractAddress: \`0x\${string}\`;
  chainId?: number;
}) =>
  function map${(0, capitalize_1.capitalize)(name)}Args(${argumentsIsObject
        ? `{
    ${inputArgsValues.join(',')}
  }`
        : 'args'}: ${(0, capitalize_1.capitalize)(name)}Arguments) {
    return {
      address: contractAddress,
      abi: ${contractName} as Narrow<Abi>,
      functionName: '${name}',
      chainId,
      args${argumentsIsObject
        ? `: [${inputArgsValues.join(',')}] as Parameters<
        ContractFunction<ContractTransaction>
      >`
        : ''},
    };
  };

export const use${(0, capitalize_1.capitalize)(name)} = (
  args: ${(0, capitalize_1.capitalize)(name)}Arguments[],
  { skip, chainId${contractAddress ? '' : ', contractAddress'}, ${contractAddress ? 'network,' : ''} ...rest }: ${(0, capitalize_1.capitalize)(name)}Options,
) =>
  useContractReads<typeof ${contractName}, '${name}', ${(0, capitalize_1.capitalize)(name)}Contract[]>({
    contracts: args.map(createMapper({ chainId, contractAddress${contractAddress ? `: available${(0, capitalize_1.capitalize)(name)}Networks[network]` : ''} })), enabled: !skip, ...rest
  }) as UseQueryResult<GetContractReturnType<typeof ${contractName}, '${name}'>[], Error>;
`;
};
exports.buildViewOnlyHooksModule = buildViewOnlyHooksModule;
//# sourceMappingURL=build-view-only-hooks-module.js.map