"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractAddresses = void 0;
const util_crypto_1 = require("@polkadot/util-crypto");
const getContractAddresses = ({ contractKeys, contractName, evmRmrkContracts, networks, }) => {
    const networksList = Object.values(networks);
    let noNetworks = true;
    const list = networksList.reduce((map, network) => {
        const key = contractKeys[contractName];
        const address = evmRmrkContracts[network] ? evmRmrkContracts[network][key] : '0xDEADBEEF';
        // Add if only address is valid
        if ((0, util_crypto_1.isEthereumAddress)(address)) {
            map[network] = address;
            noNetworks = false;
        }
        return map;
    }, {});
    return noNetworks ? undefined : list;
};
exports.getContractAddresses = getContractAddresses;
//# sourceMappingURL=get-contract-addresses.js.map