"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFunctionSingleObjectEntry = void 0;
const buildFunctionSingleObjectEntry = ({ filesToWrite, objectName, }) => {
    const methods = filesToWrite.map(({ name }) => `  ${name},`).join('\n');
    return `export const ${objectName} = {
${methods}
};`;
};
exports.buildFunctionSingleObjectEntry = buildFunctionSingleObjectEntry;
//# sourceMappingURL=build-function-single-object-entry.js.map