"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksContractFile = void 0;
const path = require("path");
const build_hook_implementation_file_name_1 = require("./build-hook-implementation-file-name");
const build_hooks_implementation_string_1 = require("./build-hooks-implementation-string");
const buildHooksContractFile = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractEntity, contractName, dir, }) => {
    var _a, _b;
    const fileName = (0, build_hook_implementation_file_name_1.buildHookImplementationFileName)(contractEntity);
    const filePath = path.normalize(path.join(dir, 'modules', fileName + '.ts'));
    const fileContent = (0, build_hooks_implementation_string_1.buildHooksImplementationString)(Object.assign({ abiToJsImportPath,
        contractAddress,
        contractName,
        contractAbiDir }, contractEntity));
    return {
        contractName,
        name: contractEntity.name,
        fileName,
        filePath,
        fileContent,
        hasReturn: ((_a = contractEntity.outputs) === null || _a === void 0 ? void 0 : _a.length) > 0,
        hasArgs: ((_b = contractEntity.inputs) === null || _b === void 0 ? void 0 : _b.length) > 0,
        isMutable: contractEntity.stateMutability !== 'view',
    };
};
exports.buildHooksContractFile = buildHooksContractFile;
//# sourceMappingURL=build-hooks-contract-file.js.map