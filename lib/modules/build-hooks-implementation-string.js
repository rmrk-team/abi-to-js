"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksImplementationString = void 0;
const build_mutable_hook_module_1 = require("./build-mutable-hook-module");
const build_no_input_hooks_module_1 = require("./build-no-input-hooks-module");
const build_view_only_hooks_module_1 = require("./build-view-only-hooks-module");
const capitalize_1 = require("./capitalize");
const map_param_type_1 = require("./map-param-type");
const map_values_1 = require("./map-values");
const pretty_1 = require("./pretty");
const list_param_type_1 = require("./list-param-type");
const buildHooksImplementationString = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, inputs, outputs, name, stateMutability, }) => {
    const argumentsIsObject = inputs.reduce((itIs, input) => itIs && Boolean(input.name), true);
    const inputArgsType = inputs.map(map_param_type_1.mapParamType).join('\n');
    const inputArgsTypelistParamType = inputs.map(list_param_type_1.listParamType).join(',');
    const inputArgsValues = inputs.map(map_values_1.mapValues);
    const outputArgsTypelistParamTypes = outputs.map(list_param_type_1.listParamType);
    const returnArgs = outputs.length
        ? `
export type ${(0, capitalize_1.capitalize)(name)}ReturnArguments = [${outputArgsTypelistParamTypes.join(',')}];
  `
        : '';
    const shouldImportBigNumber = inputs.reduce((should, { type }) => should || type.startsWith('uint') || type === 'tuple', false);
    const useArgsType = `export type ${(0, capitalize_1.capitalize)(name)}Arguments = ${argumentsIsObject
        ? `
  {
    ${inputArgsType}
  }
  `
        : `[${inputArgsTypelistParamType}]`};`;
    let code = '';
    if (stateMutability === 'view' || stateMutability === 'pure') {
        if (inputs.length == 0) {
            code = (0, build_no_input_hooks_module_1.buildNoInputHooksModule)({
                abiToJsImportPath,
                contractAbiDir,
                contractAddress,
                contractName,
                name,
                shouldImportBigNumber,
            });
        }
        else {
            code = (0, build_view_only_hooks_module_1.buildViewOnlyHooksModule)({
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
        code = (0, build_mutable_hook_module_1.buildMutableHookModule)({
            abiToJsImportPath,
            argumentsIsObject,
            contractAbiDir,
            contractAddress,
            contractName,
            inputArgsValues,
            name,
            shouldImportBigNumber,
            useArgsType,
            returnArgs,
        });
    }
    try {
        return (0, pretty_1.pretty)({ str: code });
    }
    catch (e) {
        debugger;
        console.log(e);
        return code;
    }
};
exports.buildHooksImplementationString = buildHooksImplementationString;
//# sourceMappingURL=build-hooks-implementation-string.js.map