const hello = () => 'Hello';

const add = (x,y) => {
    if (typeof x !== "number" || typeof y !== "number") 
        return null;
    return x + y
}

const square = x =>  {
    if (typeof x !== "number") 
        return null;
    return x * x;
}

const removeTNames = names => {
    return names.filter(name => !name.toLowerCase().includes('t'));
};

const myVar = "I'm a variable";

export { myVar, hello, add, square, removeTNames };