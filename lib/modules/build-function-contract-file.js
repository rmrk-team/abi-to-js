"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFunctionContractFile = void 0;
const path = require("path");
const build_function_implementation_string_1 = require("./build-function-implementation-string");
const build_function_implementation_file_name_1 = require("./build-function-implementation-file-name");
const buildFunctionContractFile = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractEntity, contractName, dir, }) => {
    const fileName = (0, build_function_implementation_file_name_1.buildFunctionImplementationFileName)(contractEntity);
    const filePath = path.normalize(path.join(dir, 'modules', fileName + '.ts'));
    const fileContent = (0, build_function_implementation_string_1.buildFunctionImplementationString)(Object.assign({ abiToJsImportPath,
        contractAddress,
        contractName,
        contractAbiDir }, contractEntity));
    return {
        name: contractEntity.name,
        fileName,
        filePath,
        fileContent,
    };
};
exports.buildFunctionContractFile = buildFunctionContractFile;
//# sourceMappingURL=build-function-contract-file.js.map