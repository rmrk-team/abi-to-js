"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMutableFunctionModule = void 0;
const capitalize_1 = require("./capitalize");
const buildMutableFunctionModule = ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import invariant from 'tiny-invariant';
import { ${shouldImportBigNumber ? 'BigNumber, ' : ''}ethers } from 'ethers';
import { getContract } from '@wagmi/core';
import { ${contractName} } from '${contractAbiDir}/${contractName}';
import { parseEvmTransactionLog } from '${abiToJsImportPath}';

${useArgsType}

type ${(0, capitalize_1.capitalize)(name)}Options = {
  signerOrProvider?: ethers.Signer | null;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
};

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}

// https://github.com/alexreardon/tiny-invariant/issues/143
const tinyInvariantPrefix = 'Invariant failed';

export const ${name} = async (
  ${argumentsIsObject ? `{ ${inputArgsValues.join(',')} }` : 'args'}: ${(0, capitalize_1.capitalize)(name)}Arguments,
  { signerOrProvider${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''} }: ${(0, capitalize_1.capitalize)(name)}Options,
) => {
  invariant(signerOrProvider, 'Something went wrong!');

  const contract = getContract({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    abi: ${contractName},
    signerOrProvider: signerOrProvider,
  });

  let contractCallTransaction:
    | Awaited<ReturnType<typeof contract['${name}']>>
    | undefined = undefined;

  let errorMessage: string | undefined = undefined;

  let transactionError: Record<string, any> | null = null;

  try {
    contractCallTransaction = await contract['${name}'](${argumentsIsObject ? inputArgsValues.join(',') : inputArgsValues.map((_, idx) => `args[${idx}]`)});

    return contractCallTransaction ? contractCallTransaction.wait() : undefined;
  } catch (e: any) {
    errorMessage = (
      e.error?.data?.message ??
      e.error?.message ??
      e.reason ??
      e.data?.message ??
      e.message
    ).replace(tinyInvariantPrefix, '');

    transactionError = parseEvmTransactionLog({
      error: e,
      contract,
    });
  }

  if (transactionError || errorMessage) console.error(transactionError || errorMessage);

  if (transactionError) throw transactionError;

  if (errorMessage) throw new Error(errorMessage);

  return;
};
`;
};
exports.buildMutableFunctionModule = buildMutableFunctionModule;
//# sourceMappingURL=build-mutable-function-module.js.map