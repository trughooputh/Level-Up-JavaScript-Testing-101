import { add, removeTNames, removeVowels } from './Utils.js';
import { createDiv } from './Dom.js';

let names = ['Scott', 'Tamara', 'Anita', 'Floren', 'Ray', 'Scott'];

createDiv(removeTNames(names));
createDiv(add(1,2));

createDiv(removeVowels('my text'));
createDiv(removeVowels('hello world'));
createDiv(removeVowels('holA la vida'));
createDiv(removeVowels());