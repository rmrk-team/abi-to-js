"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNoInputHooksModule = void 0;
const capitalize_1 = require("./capitalize");
const buildNoInputHooksModule = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, name, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { Abi, Narrow } from 'abitype';
import { useContractRead } from 'wagmi';

import { GetContractReturnType, UseQueryResult } from '${abiToJsImportPath}';
import { ${contractName} } from '${contractAbiDir}/${contractName}';

export type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  skip?: boolean;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
} & Parameters<
  typeof useContractRead<typeof ${contractName}, '${name}'>
>;

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}

export const use${(0, capitalize_1.capitalize)(name)} = ({ chainId${contractAddress ? '' : ', contractAddress'}, skip = false, ${contractAddress ? 'network,' : ''} ...rest }: ${(0, capitalize_1.capitalize)(name)}Options) =>
  useContractRead<typeof ${contractName}, '${name}'>({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    abi: ${contractName} as Narrow<typeof ${contractName}>,
    functionName: '${name}',
    chainId,
    enabled: !skip,
    ...rest,
  }) as UseQueryResult<GetContractReturnType<typeof ${contractName}, '${name}'>, Error>;
`;
};
exports.buildNoInputHooksModule = buildNoInputHooksModule;
//# sourceMappingURL=build-no-input-hooks-module.js.map