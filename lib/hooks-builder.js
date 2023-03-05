"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooksBuilder = void 0;
const build_hooks_contract_file_1 = require("./modules/build-hooks-contract-file");
const generate_modules_1 = require("./modules/generate-modules");
const write_hooks_modules_1 = require("./modules/write-hooks-modules");
const hooksBuilder = ({ abiList, indexEntryPostfix, outDir, abiToJsImportPath = 'abi-to-js', }) => (0, generate_modules_1.generateModules)({
    abiToJsImportPath,
    abiList,
    buildContractFile: build_hooks_contract_file_1.buildHooksContractFile,
    indexEntryPostfix,
    rootDir: outDir,
    writeModules: write_hooks_modules_1.writeHooksModules,
});
exports.hooksBuilder = hooksBuilder;
//# sourceMappingURL=hooks-builder.js.map