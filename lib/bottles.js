import { capitalize, downTo } from './helpers';

class Bottles {
  bottleNumberFactory(number) {
    let bottleNumberClass;
    if (number === 0) {
      bottleNumberClass = BottleNumber0;
    }
    else {
      bottleNumberClass = BottleNumber;
    }

    return new bottleNumberClass(number);
  }
  
  verse(number) {
    
    const bottleNumber = this.bottleNumberFactory(number);
    const nextBottleNumber = this.bottleNumberFactory(bottleNumber.getSuccessor());
    
    return (
      capitalize(`${bottleNumber.quantityContainerStr()} of beer on the wall, `) +
      `${bottleNumber.quantityContainerStr()} of beer.\n` +
      `${bottleNumber.getAction()}, ` +
      `${nextBottleNumber.quantityContainerStr()} of beer on the wall.\n`
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

  quantityContainerStr() {
    return `${this.getQuantity()} ${this.getContainer()}`;
  }

  getContainer() {
    if (this.number === 1) return "bottle";
    else return "bottles";
  }

  getPronoun() {
    if (this.number === 1) return "it";
    else return "one";
  }

  getQuantity() {
    return this.number.toString();
  }

  getAction() {
    return `Take ${this.getPronoun()} down and pass it around`;
  }

  getSuccessor() {
    return this.number - 1;
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
    return 99;
  }
}

export { Bottles };