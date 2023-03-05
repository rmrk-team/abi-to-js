"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFunctionImplementationString = void 0;
const build_mutable_function_module_1 = require("./build-mutable-function-module");
const build_no_input_function_module_1 = require("./build-no-input-function-module");
const build_view_only_function_module_1 = require("./build-view-only-function-module");
const capitalize_1 = require("./capitalize");
const map_param_type_1 = require("./map-param-type");
const map_values_1 = require("./map-values");
const pretty_1 = require("./pretty");
const list_param_type_1 = require("./list-param-type");
const buildFunctionImplementationString = ({ abiToJsImportPath, contractAddress, contractName, contractAbiDir, name, inputs, stateMutability, }) => {
    const argumentsIsObject = inputs.reduce((itIs, input) => itIs && Boolean(input.name), true);
    const inputArgsType = inputs.map(map_param_type_1.mapParamType).join('\n');
    const inputArgsTypelistParamType = inputs.map(list_param_type_1.listParamType).join(',');
    const inputArgsValues = inputs.map(map_values_1.mapValues);
    const shouldImportBigNumber = inputs.reduce((should, { type }) => should || type.startsWith('uint') || type === 'tuple', false);
    const useArgsType = `type ${(0, capitalize_1.capitalize)(name)}Arguments = ${argumentsIsObject
        ? `
  {
    ${inputArgsType}
  }
  `
        : `[${inputArgsTypelistParamType}]`};`;
    let code = '';
    if (stateMutability === 'view' || stateMutability === 'pure') {
        if (inputs.length == 0) {
            code = (0, build_no_input_function_module_1.buildNoInputFunctionModule)({
                abiToJsImportPath,
                contractAbiDir,
                contractAddress,
                contractName,
                name,
            });
        }
        else {
            code = (0, build_view_only_function_module_1.buildViewOnlyFunctionModule)({
                abiToJsImportPath,
                argumentsIsObject,
                contractAbiDir,
                contractAddress,
                contractName,
                inputArgsValues,
                name,
                shouldImportBigNumber,
                useArgsType,
            });
        }
    }
    else {
        code = (0, build_mutable_function_module_1.buildMutableFunctionModule)({
            abiToJsImportPath,
            argumentsIsObject,
            contractAbiDir,
            contractAddress,
            contractName,
            inputArgsValues,
            name,
            shouldImportBigNumber,
            useArgsType,
        });
    }
    try {
        return (0, pretty_1.pretty)({ str: code });
    }
    catch (err) {
        debugger;
        console.error(err);
        return code;
    }
};
exports.buildFunctionImplementationString = buildFunctionImplementationString;
//# sourceMappingURL=build-function-implementation-string.js.map