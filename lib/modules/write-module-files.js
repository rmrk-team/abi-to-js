"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeModuleFiles = void 0;
const fs = require("fs");
const writeModuleFiles = ({ filesToWrite }) => {
    for (const { name, filePath, fileContent } of filesToWrite) {
        console.log(`Writing "${name}" module...`);
        fs.writeFileSync(filePath, fileContent, 'utf-8');
        console.log(`Done`);
    }
};
exports.writeModuleFiles = writeModuleFiles;
//# sourceMappingURL=write-module-files.js.map