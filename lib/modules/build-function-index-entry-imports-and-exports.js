"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFunctionIndexEntryImportsAndExports = void 0;
const buildFunctionIndexEntryImportsAndExports = ({ filesToWrite, }) => filesToWrite
    .map(({ name, fileName }) => `import { ${name} } from './modules/${fileName}';\nexport * from './modules/${fileName}';`)
    .join('\n');
exports.buildFunctionIndexEntryImportsAndExports = buildFunctionIndexEntryImportsAndExports;
//# sourceMappingURL=build-function-index-entry-imports-and-exports.js.map