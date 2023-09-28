import { capitalize, downTo } from './helpers';

function Bottles() {
  this.verse = function(number) {
    return (
      `${capitalize(this.getQuantity(number))} ${this.getContainer(number)} of beer on the wall, ` +
      `${this.getQuantity(number)} ${this.getContainer(number)} of beer.\n` +
      `${this.getAction(number)}, ` +
      `${this.getQuantity(this.getSuccessor(number))} ${this.getContainer(number - 1)} of beer on the wall.\n`
    );
  }
  

  this.getContainer = function(number) {
    if (number === 1) return "bottle";
    else return "bottles";
  }

  this.getPronoun = function(number) {
    if (number === 1) return "it";
    else return "one";
  }

  this.getQuantity = function(number) {
    if (number === 0) return "no more";
    else return number.toString();
  }

  this.getAction = function(number) {
    if (number === 0) return 'Go to the store and buy some more';
    else return `Take ${this.getPronoun(number)} down and pass it around`;
  }

  this.getSuccessor = function(number) {
    if (number === 0) return 99;
    else return number - 1;
  }

  this.verses = function(firstVerse, lastVerse) {
    return downTo(firstVerse, lastVerse)
      .map(number => this.verse(number))
      .join("\n");
  }

  this.song = () => this.verses(99,0);
} 

export { Bottles };