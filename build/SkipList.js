"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Constants_1 = require("./Constants");
var Utils_1 = require("./Utils");
var SkipList = (function () {
    function SkipList(level) {
        this.head = new Node_1.default(level, Constants_1.NIL);
        this.updateNodes = Array(level);
        this.level = level;
        this.size = 0;
    }
    SkipList.prototype.insert = function (val) {
        var tempNode = this.head;
        for (var i = this.level; i > 0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
            this.updateNodes[i] = tempNode;
        }
        tempNode = tempNode.pointers[1];
        if (!tempNode || tempNode.value != val) {
            var newLevel = Utils_1.getLevel(this.level);
            tempNode = new Node_1.default(newLevel, val);
            for (var i = 1; i <= newLevel; i++) {
                tempNode.pointers[i] = this.updateNodes[i].pointers[i];
                this.updateNodes[i].pointers[i] = tempNode;
            }
            this.size++;
        }
        else if (tempNode.value == val) {
            tempNode.increment();
        }
    };
    SkipList.prototype.remove = function (val) {
        var tempNode = this.head;
        for (var i = this.level; i > 0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
            this.updateNodes[i] = tempNode;
        }
        tempNode = tempNode.pointers[1];
        if (tempNode && tempNode.value == val) {
            for (var i = 1; i <= this.level; i++) {
                if (this.updateNodes[i].pointers[i] == tempNode) {
                    this.updateNodes[i].pointers[i] = tempNode.pointers[i];
                }
            }
            this.size--;
        }
    };
    SkipList.prototype.find = function (val) {
        var tempNode = this.head;
        for (var i = this.level; i > 0; i--) {
            while (tempNode.pointers[i] && tempNode.pointers[i].value < val) {
                tempNode = tempNode.pointers[i];
            }
        }
        tempNode = tempNode.pointers[1];
        if (tempNode && tempNode.value == val) {
            return tempNode;
        }
    };
    return SkipList;
}());
exports.default = SkipList;
//# sourceMappingURL=SkipList.js.map