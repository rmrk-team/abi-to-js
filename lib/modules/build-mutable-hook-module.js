"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMutableHookModule = void 0;
const capitalize_1 = require("./capitalize");
const buildMutableHookModule = ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, returnArgs, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { Abi, Narrow } from 'abitype';
import { useEffect, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getContract } from '@wagmi/core';

import { ${contractName} } from '${contractAbiDir}/${contractName}';
import { decodeWagmiReceiptLogs, DecodedWagmiReceiptLog } from '${abiToJsImportPath}';

${useArgsType}

export ${returnArgs}

export type Use${(0, capitalize_1.capitalize)(contractName)}${(0, capitalize_1.capitalize)(name)}ReturnValue = {
  contract: ReturnType<typeof getContract>;
  ${returnArgs
        ? `decodedLogs: (DecodedWagmiReceiptLog<${(0, capitalize_1.capitalize)(name)}ReturnArguments> | null)[];`
        : ''}
  prepare: ReturnType<typeof usePrepareContractWrite>;
  write: Omit<ReturnType<typeof useContractWrite>, 'write'> & {
    write: () => void;
    isWaiting: boolean;
  };
  receipt: ethers.providers.TransactionReceipt;
  waitError: unknown;
};

export type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
} & Parameters<typeof usePrepareContractWrite<typeof ${contractName}, '${name}', 0>>[0];

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}


export const use${(0, capitalize_1.capitalize)(name)} = (
  ${inputArgsValues.length > 0
        ? argumentsIsObject
            ? `{ ${inputArgsValues.join(',')} }: ${(0, capitalize_1.capitalize)(name)}Arguments,`
            : `args: ${(0, capitalize_1.capitalize)(name)}Arguments,`
        : ''}
  { chainId${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''}, signer, ...rest }: ${(0, capitalize_1.capitalize)(name)}Options,
) => {
  const [receipt, setReceipt] = useState<ethers.providers.TransactionReceipt>();
  const [waitError, setWaitError] = useState<unknown>();
  const [isWaiting, setIsWaiting] = useState<boolean>();

  ${returnArgs
        ? `
  const [decodedLogs, setDecodedLogs] =
    useState<(DecodedWagmiReceiptLog<${(0, capitalize_1.capitalize)(name)}ReturnArguments> | null)[]>();`
        : ''}

  const prepare = usePrepareContractWrite({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    chainId,
    abi: ${contractName},
    functionName: '${name}',${inputArgsValues.length
        ? `args${argumentsIsObject ? `: [${inputArgsValues.join(',')}]` : ''},`
        : ''}
    ...rest
  })

  const writeHookReturn = useContractWrite(prepare.config);

  const onWrite = () => {
    const { write } = writeHookReturn;

    if (write) {
      write();
    }
  };

  const contract = getContract({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    abi: ${contractName},
    signerOrProvider: signer || undefined,
  });

  useEffect(() => {
    const { data } = writeHookReturn;

    if (data && !receipt) {
      setIsWaiting(true);

      data
        .wait()
        .then((receipt) => {
${returnArgs
        ? `          setDecodedLogs(decodeWagmiReceiptLogs<${(0, capitalize_1.capitalize)(name)}ReturnArguments>(contract, receipt));`
        : ''}
          setReceipt(receipt);
        })
        .catch(setWaitError)
        .finally(() => {
          setIsWaiting(false);
        });
    }
  }, [writeHookReturn.data, contract, receipt]);

  return {
    contract,
    prepare,
    write: {
      ...writeHookReturn,
      write: onWrite,
      isWaiting,
    },
        receipt,
        waitError,
${returnArgs ? ` decodedLogs, ` : ''}
  } as Use${(0, capitalize_1.capitalize)(contractName)}${(0, capitalize_1.capitalize)(name)}ReturnValue;
};
`;
};
exports.buildMutableHookModule = buildMutableHookModule;
//# sourceMappingURL=build-mutable-hook-module.js.map