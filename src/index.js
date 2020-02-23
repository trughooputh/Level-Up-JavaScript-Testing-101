import { add, removeTNames } from './App.js';
import { createDiv } from './Dom.js';

let names = ['Scott', 'Tamara', 'Anita', 'Floren', 'Ray', 'scott'];

createDiv(removeTNames(names));
createDiv(add(1,2));
