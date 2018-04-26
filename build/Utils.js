"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var P = 0.5;
exports.flipCoin = function () { return Math.random() > P; };
exports.getLevel = function (maxLevel) {
    var level = 1;
    while (exports.flipCoin() && level < maxLevel) {
        level++;
    }
    return level;
};
exports.default = {
    flipCoin: exports.flipCoin,
    getLevel: exports.getLevel
};
//# sourceMappingURL=Utils.js.map