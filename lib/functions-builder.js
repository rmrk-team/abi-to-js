"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionsBuilder = void 0;
const build_function_contract_file_1 = require("./modules/build-function-contract-file");
const generate_modules_1 = require("./modules/generate-modules");
const write_function_modules_1 = require("./modules/write-function-modules");
const functionsBuilder = ({ abiList, indexEntryPostfix, outDir, abiToJsImportPath = 'abi-to-js', }) => (0, generate_modules_1.generateModules)({
    abiToJsImportPath,
    abiList,
    buildContractFile: build_function_contract_file_1.buildFunctionContractFile,
    indexEntryPostfix,
    rootDir: outDir,
    writeModules: write_function_modules_1.writeFunctionModules,
});
exports.functionsBuilder = functionsBuilder;
//# sourceMappingURL=functions-builder.js.map