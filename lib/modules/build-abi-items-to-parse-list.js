"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAbiItemsToParseList = void 0;
const get_contract_addresses_1 = require("./get-contract-addresses");
const buildAbiItemsToParseList = ({ contractKeys, evmRmrkContracts, items, networks, }) => items.map(([contractName, contractEntity, contractAbiDir]) => [
    contractName,
    contractEntity,
    contractAbiDir,
    (0, get_contract_addresses_1.getContractAddresses)({ contractName, contractKeys, evmRmrkContracts, networks }),
]);
exports.buildAbiItemsToParseList = buildAbiItemsToParseList;
//# sourceMappingURL=build-abi-items-to-parse-list.js.map