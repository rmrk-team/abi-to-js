"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHookImplementationFileName = void 0;
const capitalize_1 = require("./capitalize");
const dash_case_1 = require("./dash-case");
const buildHookImplementationFileName = ({ name }) => `use-${(0, dash_case_1.dashCase)((0, capitalize_1.capitalize)(name))}`;
exports.buildHookImplementationFileName = buildHookImplementationFileName;
//# sourceMappingURL=build-hook-implementation-file-name.js.map