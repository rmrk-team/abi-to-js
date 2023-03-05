"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFunctionsList = void 0;
const buildFunctionsList = ({ abi }) => {
    const functionsSchedule = [];
    for (const item of abi) {
        const { inputs, name, outputs, stateMutability, type } = item;
        if (type === 'function') {
            functionsSchedule.push({ inputs, name, outputs, stateMutability, type });
        }
    }
    return functionsSchedule;
};
exports.buildFunctionsList = buildFunctionsList;
//# sourceMappingURL=build-functions-list.js.map