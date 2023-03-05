"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildViewOnlyFunctionModule = void 0;
const capitalize_1 = require("./capitalize");
const buildViewOnlyFunctionModule = ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { ${shouldImportBigNumber ? 'BigNumber, ' : ''}ContractTransaction } from 'ethers';
import { ContractFunction } from '@ethersproject/contracts';
import { readContracts } from 'wagmi';

import { ${contractName} } from '${contractAbiDir}/${contractName}';
import { GetContractReturnType } from '${abiToJsImportPath}';

${useArgsType}

type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
};

type ${name}Contract = {
  abi: typeof ${contractName};
  functionName: '${name}';
  contractAddress: \`0x\${string}\`;
};

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
      abi: ${contractName},
      functionName: '${name}',
      chainId,
      args${argumentsIsObject
        ? `: [${inputArgsValues.join(',')}] as Parameters<
        ContractFunction<ContractTransaction>
      >`
        : ''},
    };
  };

export const ${name} = (
  args: ${(0, capitalize_1.capitalize)(name)}Arguments[],
  { chainId${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''} }: ${(0, capitalize_1.capitalize)(name)}Options,
) => readContracts<
  typeof ${contractName},
    '${name}',
    ${name}Contract[],
  >({
  contracts: args.map(createMapper({ chainId, contractAddress${contractAddress ? `: available${(0, capitalize_1.capitalize)(name)}Networks[network]` : ''} })),
}) as Promise<GetContractReturnType<
  typeof ${contractName},
  '${name}'
  >[]>;

`;
};
exports.buildViewOnlyFunctionModule = buildViewOnlyFunctionModule;
//# sourceMappingURL=build-view-only-function-module.js.map