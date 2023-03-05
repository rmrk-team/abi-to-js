"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateModules = void 0;
const fs = require("fs");
const path = require("path");
const ramda_1 = require("ramda");
const build_functions_list_1 = require("./build-functions-list");
const generateModules = ({ abiToJsImportPath, indexEntryPostfix, abiList, buildContractFile, rootDir, writeModules, }) => {
    const indexEntries = [];
    const removeImplPostfix = (str) => str.replace(/Impl$/, '');
    for (const abiAndItsName of abiList) {
        const [contractName, abi, contractAbiDir, contractAddress] = abiAndItsName;
        const dir = path.join(rootDir, removeImplPostfix(contractName));
        const functionsList = (0, build_functions_list_1.buildFunctionsList)({ abi });
        try {
            fs.mkdirSync(dir, { recursive: true });
        }
        catch (_) { }
        try {
            fs.mkdirSync(path.join(dir, 'modules'), { recursive: true });
        }
        catch (_) { }
        // TODO: investigate duplicate function declarations
        const filesToWrite = (0, ramda_1.uniqBy)(({ name }) => name, functionsList.map((contractEntity) => buildContractFile({
            contractAbiDir,
            contractEntity,
            contractName,
            dir,
            contractAddress,
            abiToJsImportPath,
        })));
        writeModules({ contractName, outDir: dir, filesToWrite });
        indexEntries.push(removeImplPostfix(contractName));
    }
    const indexEntry = `${indexEntries
        .map((name) => `export { ${indexEntryPostfix ? `${name} as ${name}${indexEntryPostfix}` : `${name}`} } from './${name}';`)
        .join('\n')}`;
    fs.writeFileSync(path.join(rootDir, 'index.ts'), indexEntry, 'utf8');
};
exports.generateModules = generateModules;
//# sourceMappingURL=generate-modules.js.map