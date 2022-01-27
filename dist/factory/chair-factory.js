"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_chair_1 = require("./big-chair");
const medium_chair_1 = require("./medium-chair");
const small_chair_1 = require("./small-chair");
class ChairFactory {
    static getChair(chair) {
        if (chair == "BigChai") {
            return new big_chair_1.default();
        }
        else if (chair == "MediumChair") {
            return new medium_chair_1.default();
        }
        else {
            return new small_chair_1.default();
        }
    }
}
exports.default = ChairFactory;
