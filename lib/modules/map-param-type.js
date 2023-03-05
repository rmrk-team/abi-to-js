"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapParamType = void 0;
const mapParamType = (param) => {
    const isArray = param.type.endsWith('[]');
    const postfix = isArray ? '[]' : '';
    if (param.type === 'address') {
        return `  ${param.name}: \`0x\${string}\`${postfix};`;
    }
    if (param.type === 'tuple') {
        return `  ${param.name}: { ${((param === null || param === void 0 ? void 0 : param.components) || []).map(exports.mapParamType).join('\n')} };`;
    }
    if (param.type === 'bool') {
        return `  ${param.name}: boolean${postfix};`;
    }
    if (param.type === 'address') {
        return `  ${param.name}: \`0x\${string}\`${postfix};`;
    }
    if (param.type.startsWith('bytes')) {
        return `  ${param.name}: \`0x\${string}\`${postfix};`;
    }
    if (param.type.startsWith('uint16')) {
        return `  ${param.name}: number${postfix};`;
    }
    if (param.type.startsWith('uint8')) {
        return `  ${param.name}: number${postfix};`;
    }
    if (param.type.startsWith('uint')) {
        return `  ${param.name}: BigNumber${postfix};`;
    }
    return `  ${param.name}: ${param.type}${postfix};`;
};
exports.mapParamType = mapParamType;
//# sourceMappingURL=map-param-type.js.map