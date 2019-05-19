const createDiv = (content, parent = 'content') => {
    let div = document.createElement("div");
    let id = Math.random().toString(36).substr(2, 5);
    div.classList.add(`elmt-${id}`);
    div.innerHTML = content;
    // div.appendChild(createP('Label'));
    document.getElementById(parent).appendChild(div);
}

const createP = (content) => {
    let p = document.createElement("p");
    p.innerHTML = content;
    return p;
}
export { createDiv };