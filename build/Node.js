"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = (function () {
    function Node(level, val) {
        this.value = val || null;
        this.counter = val ? 1 : 0;
        this.pointers = Array(level + 1);
    }
    Node.prototype.increment = function () {
        this.counter++;
    };
    return Node;
}());
exports.default = Node;
//# sourceMappingURL=Node.js.map