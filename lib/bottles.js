import { capitalize, downTo } from './helpers';

class Bottles {
  verse(number) {
    
    const bottleNumber = BottleNumber.factory(number);
    
    return (
      capitalize(`${bottleNumber.quantityContainerStr()} of beer on the wall, `) +
      `${bottleNumber.quantityContainerStr()} of beer.\n` +
      `${bottleNumber.getAction()}, ` +
      `${bottleNumber.getSuccessor().quantityContainerStr()} of beer on the wall.\n`
    );
  }

  verses(firstVerse, lastVerse) {
    return downTo(firstVerse, lastVerse)
      .map(number => this.verse(number))
      .join("\n");
  }

  song() {
    return this.verses(99,0);
  }
} 

class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static factory(number) {
    let bottleNumberClass;
    switch (number) {
      case 0:
        bottleNumberClass = BottleNumber0;
        break;
      case 1:
        bottleNumberClass = BottleNumber1;
        break;
      default:
        bottleNumberClass = BottleNumber;
        break;
    }

    return new bottleNumberClass(number);
  }

  quantityContainerStr() {
    return `${this.getQuantity()} ${this.getContainer()}`;
  }

  getContainer() {
    return "bottles";
  }

  getPronoun() {
    return "one";
  }

  getQuantity() {
    return this.number.toString();
  }

  getAction() {
    return `Take ${this.getPronoun()} down and pass it around`;
  }

  getSuccessor() {
    return BottleNumber.factory(this.number - 1);
  }
}

class BottleNumber0 extends BottleNumber {
  getQuantity() {
    return "no more";
  }

  getAction() {
    return 'Go to the store and buy some more';
  }

  getSuccessor() {
    return BottleNumber.factory(99);
  }
}

class BottleNumber1 extends BottleNumber {
  getContainer() {
    return "bottle";
  }

  getPronoun() {
    return "it";
  }
}

export { Bottles };