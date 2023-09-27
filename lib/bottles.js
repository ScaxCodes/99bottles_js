import { downTo } from './helpers';

function Bottles() {
  this.verse = function(number) {
    switch(number) {
      case 0:
        return (
          `No more bottles of beer on the wall, ` +
          `no more bottles of beer.\n` +
          "Go to the store and buy some more, " +
          `99 bottles of beer on the wall.\n`
        )
  
      default:
        return (
          `${number} ${this.getContainer(number)} of beer on the wall, ` +
          `${number} ${this.getContainer(number)} of beer.\n` +
          `Take ${this.getPronoun(number)} down and pass it around, ` +
          `${this.getQuantity(number - 1)} ${this.getContainer(number - 1)} of beer on the wall.\n`
        );
    }
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
    else return number;
  }

  this.verses = function(firstVerse, lastVerse) {
    return downTo(firstVerse, lastVerse)
      .map(number => this.verse(number))
      .join("\n");
  }

  this.song = () => this.verses(99,0);
} 

export { Bottles };