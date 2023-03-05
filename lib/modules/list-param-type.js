"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listParamType = void 0;
const listParamType = (param) => {
    const isArray = param.type.endsWith('[]');
    const postfix = isArray ? '[]' : '';
    if (param.type === 'address') {
        return `\`0x\${string}\`${postfix}`;
    }
    if (param.type === 'tuple') {
        return `{ ${((param === null || param === void 0 ? void 0 : param.components) || []).map(exports.listParamType).join('\n')} }`;
    }
    if (param.type === 'bool') {
        return `boolean${postfix}`;
    }
    if (param.type === 'address') {
        return `\`0x\${string}\`${postfix}`;
    }
    if (param.type.startsWith('bytes')) {
        return `\`0x\${string}\`${postfix}`;
    }
    if (param.type === 'uint16') {
        return `number${postfix}`;
    }
    if (param.type === 'uint8') {
        return `number${postfix}`;
    }
    if (param.type.startsWith('uint')) {
        return `BigNumber${postfix}`;
    }
    return `${param.type}${postfix}`;
};
exports.listParamType = listParamType;
//# sourceMappingURL=list-param-type.js.map