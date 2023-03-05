"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEvmTransactionLog = void 0;
const parseEvmTransactionLog = ({ error, contract }) => {
    var _a;
    try {
        const revertData = (_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.data;
        return contract.interface.parseError(revertData);
    }
    catch (_) {
        return null;
    }
};
exports.parseEvmTransactionLog = parseEvmTransactionLog;
//# sourceMappingURL=parse-evm-transaction-log.js.map