import { downTo } from './helpers';

// Create object constructor "Bottles" with method "verse" that takes the verse-number and returns the following String:
// 'Take one down and pass it around, ' +
// '98 bottles of beer on the wall.\n';

function Bottles() {
    this.verse = function(counter) {
        // Better readability
        if (counter > 2) return counter + " bottles of beer on the wall, " +
                                counter + " bottles of beer.\nTake one down and pass it around, " +
                                (counter - 1) + " bottles of beer on the wall.\n";
        // First version during 30min time frame
        else if (counter === 2) return `${counter} bottles of beer on the wall, ${counter} bottles of beer.\nTake one down and pass it around, ${counter - 1} bottle of beer on the wall.\n`;
        else if (counter === 1) return `${counter} bottle of beer on the wall, ${counter} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
        else if (counter === 0) return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }

    this.verses = function(...counters) {
        let output = "";
        counters.forEach((counter, index) => {
            if (counter > 2) output += `${counter} bottles of beer on the wall, ${counter} bottles of beer.\nTake one down and pass it around, ${counter - 1} bottles of beer on the wall.\n`;
            else if (counter === 2) output += `${counter} bottles of beer on the wall, ${counter} bottles of beer.\nTake one down and pass it around, ${counter - 1} bottle of beer on the wall.\n`;
            else if (counter === 1) output += `${counter} bottle of beer on the wall, ${counter} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
            else if (counter === 0) output += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
            if (index === 0) output += "\n";        
            });
        return output;
    }
} 

export { Bottles };