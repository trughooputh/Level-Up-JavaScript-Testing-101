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

const removeVowels = (text = '')  => {
    const vowels = ['a','e','i','o','u','y'];
    return text.split('').filter( letter => !vowels.includes(letter)).join('');
}

const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 5);
}

export { 
    isNumber,
    add,
    square,
    filterByProfile,
    removeTNames,
    removeVowels,
    generateRandomId
};