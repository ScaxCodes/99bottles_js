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

  getContainer = function() {
    if (this.number === 1) return "bottle";
    else return "bottles";
  }

  getPronoun = function() {
    if (this.number === 1) return "it";
    else return "one";
  }

  getQuantity = function() {
    if (this.number === 0) return "no more";
    else return this.number.toString();
  }

  getAction = function() {
    if (this.number === 0) return 'Go to the store and buy some more';
    else return `Take ${this.getPronoun()} down and pass it around`;
  }

  getSuccessor = function() {
    if (this.number === 0) return 99;
    else return this.number - 1;
  }
}

class BottleNumber0 extends BottleNumber {
  getQuantity = function() {
    return "no more";
  }
}

export { Bottles };