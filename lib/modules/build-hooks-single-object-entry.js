"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksSingleObjectEntry = void 0;
const capitalize_1 = require("./capitalize");
/**
 * WithdrawRaisedArguments
 * WithdrawRaisedOptions
 * UseWithdrawRaisedReturnValue
 * @param filesToWrite
 * @param objectName
 */
const buildHooksSingleObjectEntry = ({ filesToWrite, objectName, }) => {
    const methods = filesToWrite.map(({ name }) => `  use${(0, capitalize_1.capitalize)(name)},`).join('\n');
    const type = filesToWrite
        .map(({ contractName = '', name, isMutable, hasReturn, hasArgs }) => `  use${(0, capitalize_1.capitalize)(name)}(${hasArgs
        ? isMutable
            ? `args: ${(0, capitalize_1.capitalize)(name)}Arguments,`
            : `args: ${(0, capitalize_1.capitalize)(name)}Arguments[],`
        : ''} opts: ${(0, capitalize_1.capitalize)(name)}Options): ${hasReturn && isMutable
        ? `Use${(0, capitalize_1.capitalize)(contractName)}${(0, capitalize_1.capitalize)(name)}ReturnValue`
        : `ReturnType<typeof use${(0, capitalize_1.capitalize)(name)}>`}`)
        .join('\n');
    return `export const ${objectName}: {
  ${type}
  } = {
${methods}
};`;
};
exports.buildHooksSingleObjectEntry = buildHooksSingleObjectEntry;
//# sourceMappingURL=build-hooks-single-object-entry.js.map