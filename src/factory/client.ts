// Factory Use Case
import ChairFactory from "./chair-factory";

const CHAIR = ChairFactory.getChair("MediumChair");
console.log(CHAIR.getDimensions());
