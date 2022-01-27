// Just the concept of the Factory Pattern

interface IProduct {
  name: string;
}

class ConcreteProduct implements IProduct {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductA";
  }
}
class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductB";
  }
}
class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductC";const PRODUCT = Creator.createObject('b')
    console.log(PRODUCT.name)
  }
}

class Creator {
  static createObject(type: string): IProduct {
    if (type === "a") {
      return new ConcreteProductA();
    }
    if (type === "b") {
      return new ConcreteProductB();
    }
    if (type === "c") {
      return new ConcreteProductC();
    }
    return new ConcreteProduct()
  }
}

const PRODUCT = Creator.createObject('b')
console.log(PRODUCT.name)