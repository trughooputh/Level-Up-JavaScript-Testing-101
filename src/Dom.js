import { generateRandomId } from "./Utils"

const createDiv = content => {
    let div = document.createElement('div');
    let id = generateRandomId();
    div.setAttribute('id', `elmt-${id}`);
    div.innerHTML = content;
    const mainHTML = document.getElementsByTagName('main')[0];
    mainHTML.appendChild(div);
}

export { createDiv, generateRandomId };