"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashCase = void 0;
const dashCase = (str) => {
    let dashCaseFileName = `${str}`.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
    dashCaseFileName = dashCaseFileName.replace('u-r-i', 'uri');
    dashCaseFileName = dashCaseFileName.replace('v-e-r-s-i-o-n', 'version');
    dashCaseFileName = dashCaseFileName.replace('e-r-c', 'erc');
    dashCaseFileName = dashCaseFileName.replace('r-m-r-k', 'rmrk');
    dashCaseFileName = dashCaseFileName.replace(/^-/, '');
    return dashCaseFileName;
};
exports.dashCase = dashCase;
//# sourceMappingURL=dash-case.js.map