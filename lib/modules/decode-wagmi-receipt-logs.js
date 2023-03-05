"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeWagmiReceiptLogs = void 0;
const decodeWagmiReceiptLogs = (contract, transactionReceipt) => {
    return transactionReceipt.logs.map((log) => {
        try {
            const parsedLog = contract.interface.parseLog({ data: log.data, topics: log.topics });
            return Object.assign(Object.assign({}, parsedLog), { args: new Array(parsedLog.args.length)
                    .fill(null)
                    .map((_, idx) => parsedLog.args[idx]) });
        }
        catch (e) {
            console.warn(e);
            return null;
        }
    });
};
exports.decodeWagmiReceiptLogs = decodeWagmiReceiptLogs;
//# sourceMappingURL=decode-wagmi-receipt-logs.js.map