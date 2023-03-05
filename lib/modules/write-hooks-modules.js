"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeHooksModules = void 0;
const fs = require("fs");
const path = require("path");
const build_hooks_index_entry_imports_and_exports_1 = require("./build-hooks-index-entry-imports-and-exports");
const build_hooks_single_object_entry_1 = require("./build-hooks-single-object-entry");
const write_module_files_1 = require("./write-module-files");
const pretty_1 = require("./pretty");
const writeHooksModules = ({ contractName, outDir, filesToWrite, }) => {
    (0, write_module_files_1.writeModuleFiles)({ filesToWrite });
    const indexPath = path.normalize(path.join(outDir, 'index.ts'));
    const imports = (0, build_hooks_index_entry_imports_and_exports_1.buildHooksIndexEntryImportsAndExports)({ filesToWrite });
    const singleObjectEntry = (0, build_hooks_single_object_entry_1.buildHooksSingleObjectEntry)({
        filesToWrite,
        objectName: contractName.replace(/Impl$/, ''),
    });
    let indexFileText = `/** WARNING! This file is auto-generated. Please do not edit! */
${imports}

${singleObjectEntry}
`;
    try {
        indexFileText = (0, pretty_1.pretty)({ str: indexFileText });
    }
    catch (_) { }
    fs.writeFileSync(indexPath, indexFileText, 'utf-8');
};
exports.writeHooksModules = writeHooksModules;
//# sourceMappingURL=write-hooks-modules.js.map