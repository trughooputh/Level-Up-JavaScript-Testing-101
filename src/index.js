import { myVar, hello, square, removeTNames } from './App.js';
import { createDiv } from './Dom.js';

createDiv(myVar);
createDiv(hello());
createDiv(square(-4));

let names = ['Scott', 'Tamara', 'Anita', 'Floren', 'Ray', 'scott'];
createDiv(removeTNames(names));
