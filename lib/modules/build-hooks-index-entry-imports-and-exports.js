"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksIndexEntryImportsAndExports = void 0;
const capitalize_1 = require("./capitalize");
const buildHooksIndexEntryImportsAndExports = ({ filesToWrite, }) => filesToWrite
    .map(({ contractName = '', name, fileName, hasArgs, hasReturn, isMutable }) => `import { use${(0, capitalize_1.capitalize)(name)}, ${hasArgs ? `${(0, capitalize_1.capitalize)(name)}Arguments,` : ''}
${(0, capitalize_1.capitalize)(name)}Options, ${hasReturn && isMutable
    ? `Use${(0, capitalize_1.capitalize)(contractName)}${(0, capitalize_1.capitalize)(name)}ReturnValue`
    : ''} } from './modules/${fileName}';\nexport * from './modules/${fileName}';`)
    .join('\n');
exports.buildHooksIndexEntryImportsAndExports = buildHooksIndexEntryImportsAndExports;
//# sourceMappingURL=build-hooks-index-entry-imports-and-exports.js.map