import { capitalize, downTo } from './helpers';

function Bottles() {
  this.verse = function(number) {
    return (
      `${capitalize(this.getQuantity(number))} ${this.getContainer(number)} of beer on the wall, ` +
      `${this.getQuantity(number)} ${this.getContainer(number)} of beer.\n` +
      `${this.getAction(number)}, ` +
      `${this.getQuantity(this.getSuccessor(number))} ${this.getContainer(this.getSuccessor(number))} of beer on the wall.\n`
    );
  }

  this.verses = function(firstVerse, lastVerse) {
    return downTo(firstVerse, lastVerse)
      .map(number => this.verse(number))
      .join("\n");
  }

  this.song = () => this.verses(99,0);
    
  this.getContainer = function(number) {
    return new BottleNumber(number).getContainer();
  }

  this.getQuantity = function(number) {
    return new BottleNumber(number).getQuantity();
  }

  this.getAction = function(number) {
    return new BottleNumber(number).getAction();
  }

  this.getSuccessor = function(number) {
    return new BottleNumber(number).getSuccessor();
  }
} 

function BottleNumber(number) {
  this.number = number;

  this.getContainer = function() {
    if (this.number === 1) return "bottle";
    else return "bottles";
  }

  this.getPronoun = function() {
    if (this.number === 1) return "it";
    else return "one";
  }

  this.getQuantity = function() {
    if (this.number === 0) return "no more";
    else return this.number.toString();
  }

  this.getAction = function() {
    if (this.number === 0) return 'Go to the store and buy some more';
    else return `Take ${this.getPronoun()} down and pass it around`;
  }

  this.getSuccessor = function() {
    if (this.number === 0) return 99;
    else return this.number - 1;
  }
}

export { Bottles };