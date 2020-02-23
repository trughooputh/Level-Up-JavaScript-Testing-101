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

const filterByProfile = (list, profile) => {
    if (list) {
        if (profile) {
            return list.filter(elmt => {
                return elmt.profile === profile;
            });
        }
        return list;
    }
    return [];
}

export { isNumber, add, square, filterByProfile, removeTNames };