import { add, removeTNames } from './Utils.js';
import { createDiv } from './Dom.js';

let names = ['Scott', 'Tamara', 'Anita', 'Floren', 'Ray', 'Scott'];

createDiv(removeTNames(names));
createDiv(add(1,2));
