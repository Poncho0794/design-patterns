"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Factory Use Case
const chair_factory_1 = require("./chair-factory");
const CHAIR = chair_factory_1.default.getChair("MediumChair");
console.log(CHAIR.getDimensions());
