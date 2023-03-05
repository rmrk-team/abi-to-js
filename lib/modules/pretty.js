"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pretty = void 0;
const prettier = require("prettier");
const pretty = ({ str }) => {
    return prettier.format(str, {
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: true,
        parser: 'typescript',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: true,
    });
};
exports.pretty = pretty;
//# sourceMappingURL=pretty.js.map