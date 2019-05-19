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
    let newNames = [];
    names.forEach(name => {
        if(!name.toLowerCase().includes('t')) {
            newNames.push(name);
        }
    });
    return newNames;
};

const myVar = "I'm a variable";

export { myVar, hello, add, square, removeTNames };