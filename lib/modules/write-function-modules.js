"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFunctionModules = void 0;
const fs = require("fs");
const path = require("path");
const build_function_index_entry_imports_and_exports_1 = require("./build-function-index-entry-imports-and-exports");
const build_function_single_object_entry_1 = require("./build-function-single-object-entry");
const write_module_files_1 = require("./write-module-files");
const writeFunctionModules = ({ contractName, outDir, filesToWrite, }) => {
    (0, write_module_files_1.writeModuleFiles)({ filesToWrite });
    const indexPath = path.normalize(path.join(outDir, 'index.ts'));
    const imports = (0, build_function_index_entry_imports_and_exports_1.buildFunctionIndexEntryImportsAndExports)({ filesToWrite });
    const singleObjectEntry = (0, build_function_single_object_entry_1.buildFunctionSingleObjectEntry)({
        filesToWrite,
        objectName: contractName.replace(/Impl$/, ''),
    });
    const indexFileText = `/** WARNING! This file is auto-generated. Please do not edit! */
${imports}

${singleObjectEntry}
`;
    fs.writeFileSync(indexPath, indexFileText, 'utf-8');
};
exports.writeFunctionModules = writeFunctionModules;
//# sourceMappingURL=write-function-modules.js.map