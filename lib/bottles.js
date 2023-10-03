import { capitalize, downTo } from './helpers';

class Bottles {
  bottleNumberFor(number) {
    if (number === 0) return new BottleNumber0(number);
    else return new BottleNumber(number);
  }
  
  verse(number) {
    
    const bottleNumber = this.bottleNumberFor(number);
    const nextBottleNumber = this.bottleNumberFor(bottleNumber.getSuccessor());
    
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
    if (this.number === 0) return "no more";
    else return this.number.toString();
  }

  getAction() {
    if (this.number === 0) return 'Go to the store and buy some more';
    else return `Take ${this.getPronoun()} down and pass it around`;
  }

  getSuccessor() {
    if (this.number === 0) return 99;
    else return this.number - 1;
  }
}

class BottleNumber0 extends BottleNumber {
  getQuantity() {
    return "no more";
  }
}

export { Bottles };