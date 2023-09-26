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

      case 1: 
        return (
          `1 bottle of beer on the wall, ` +
          `1 bottle of beer.\n` +
          "Take it down and pass it around, " +
          `no more bottles of beer on the wall.\n`
        );
  
      default:
        return (
          `${number} bottles of beer on the wall, ` +
          `${number} bottles of beer.\n` +
          "Take one down and pass it around, " +
          `${number - 1} ${this.getContainer(number - 1)} of beer on the wall.\n`
        );
    }
  }

  this.getContainer = function(number) {
    if (number === 1) return "bottle";
    else return "bottles";
  }

  this.verses = function(firstVerse, lastVerse) {
    return downTo(firstVerse, lastVerse)
      .map(number => this.verse(number))
      .join("\n");
  }

  this.song = () => this.verses(99,0);
} 

export { Bottles };