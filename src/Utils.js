const isNumber = x => {
    return typeof x == "number"
}

const add = (x,y) => {
    if (!isNumber(x) || !isNumber(y)) 
        return null;
    return x + y
}

const square = x =>  {
    if (!isNumber(x)) 
        return null;
    return x * x;
}

const removeTNames = names => {
    return names.filter(name => !name.toLowerCase().includes('t'));
};

export { isNumber, add, square, removeTNames };