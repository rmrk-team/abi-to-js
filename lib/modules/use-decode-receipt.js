"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDecodeReceipt = void 0;
const abi_to_js_1 = require("../abi-to-js");
// ContractValueDefinition
const useDecodeReceipt = ({ contract, receipt }) => {
    const a = {
        eventFragment: {
            name: 'AssetSet',
            anonymous: false,
            inputs: [
                {
                    name: 'assetId',
                    type: 'address',
                    indexed: true,
                    components: null,
                    arrayLength: null,
                    arrayChildren: null,
                    baseType: 'address',
                    _isParamType: true,
                },
                {
                    name: 'assetId',
                    type: 'uint64',
                    indexed: true,
                    components: null,
                    arrayLength: null,
                    arrayChildren: null,
                    baseType: 'uint64',
                    _isParamType: true,
                },
            ],
            type: 'event',
            _isFragment: true,
        },
        name: 'AssetSet',
        signature: 'AssetSet(uint64)',
        topic: '0x3cd061096eaf881067d936308fbd8b81d060c45ab2ec910c02b953162befc109',
        args: [
            { type: 'BigNumber', hex: '0x06' },
            { type: 'address', hex: '0x0600000' },
        ],
    };
    const logs = contract && receipt ? (0, abi_to_js_1.decodeWagmiReceiptLogs)(contract, receipt) : [];
};
exports.useDecodeReceipt = useDecodeReceipt;
//# sourceMappingURL=use-decode-receipt.js.map