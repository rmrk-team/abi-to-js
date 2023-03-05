"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNoInputFunctionModule = void 0;
const capitalize_1 = require("./capitalize");
const buildNoInputFunctionModule = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, name, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { readContract } from '@wagmi/core';
import { ${contractName} } from '${contractAbiDir}/${contractName}';
import { GetContractReturnType } from '${abiToJsImportPath}';

type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
};

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}


export const ${name} = ({ chainId${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''} }: ${(0, capitalize_1.capitalize)(name)}Options) =>
  readContract<typeof ${contractName}, '${name}'>({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    abi: ${contractName},
    functionName: '${name}',
    chainId,
  }) as Promise<GetContractReturnType<typeof ${contractName}, '${name}'>>;
`;
};
exports.buildNoInputFunctionModule = buildNoInputFunctionModule;
//# sourceMappingURL=build-no-input-function-module.js.map