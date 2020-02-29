import { isNumber, add, square, removeTNames, filterByProfile, removeVowels } from "./Utils"

describe('Utils', () => {
    describe('isNumber function', () => {
        it('should return true for a number', () => {
            expect(isNumber(3)).toBe(true);
            expect(isNumber(300)).toBe(true);
            expect(isNumber(3,10)).toBe(true);
        });
        it('should return false for a string', () => {
            expect(isNumber('hey')).toBe(false);
        });
        it('should return false for an object', () => {
            expect(isNumber({})).toBe(false);
        });
    });
    describe('add function', () => {
        it('should return a number', () => {
            expect(add(1,2)).toBe(3);
            expect(add(4,4)).toBe(8);
            expect(add(0,1)).toBe(1);
            expect(add(0,0)).toBe(0);
            expect(add(-2,0)).toBe(-2);
            expect(add(-2,-2)).toBe(-4);
        });
        it('should not add a string', () => {
            expect(add(1,"2")).toBe(null);
            expect(add("1",2)).toBe(null);
            expect(add("1","2")).toBe(null);
            expect(add([],2)).toBe(null);
        });
        it('should not add an object', () => {
            expect(add(1,{})).toBe(null);
            expect(add({}, 1)).toBe(null);
            expect(add({}, {})).toBe(null);
        });
        it('should not add an array', () => {
            expect(add(1,[])).toBe(null);
            expect(add([], 1)).toBe(null);
            expect(add([], [])).toBe(null);
        });
    });
    
    describe('square function', () => {
        it('should return a number value', () => {
            expect(square(2)).toBe(4);
            expect(square(3)).toBe(9);
        });
        it('should return null for a string', () => {
            expect(square("3")).toBe(null);
        });
        it('should return null for a empty parameter', () => {
            expect(square()).toBe(null);
        });
        it('should be positive', () => {
            expect(square(-2)).not.toBeLessThan(0);
        });
    });
    
    describe('removeTNames function', () => {
        const names = ['Thomas', 'Carolina', 'Tandoori', 'Marco', 'Tabasco'];
        it('should remove all T names', () => {
            expect(removeTNames(names)).not.toContain('Thomas');
            expect(removeTNames(names)).not.toContain('Tandoori');
        });
        it('should not remove other names', () => {
            expect(removeTNames(names)).toContain('Carolina');
            expect(removeTNames(names)).toContain('Marco');
        });
        it('should account for cases', () => {
            expect(removeTNames(names)).not.toContain('Thomas');
            expect(removeTNames(names)).not.toContain('thomas');
        });
    });

    describe('filterByProfile', () => {
        const profiles = [
            {name: 'Ted', profile: 'translator', },
            {name: 'Max', profile: 'admin', },
            {name: 'Henry', profile: 'admin', },
            {name: 'Haaland', profile: 'editor', },
        ]
        it('should be a function', () => {
            expect(typeof filterByProfile).toBe('function');
        });
        it('should return an array empty, if no params', () => {
            expect(typeof filterByProfile()).toBe('object'); // arrays are object type
        });
        it('should return an array if not parameters', () => {
            expect(typeof filterByProfile()).toBe('object'); // arrays are object type
        });
        it('should return admin profiles', () => {
            expect(filterByProfile(profiles, 'admin').length).toBe(2);
        });
        it('should return editor profiles', () => {
            expect(filterByProfile(profiles, 'editor').length).toBe(1);
        });
        it('should return all list if no profile defined', () => {
            expect(filterByProfile(profiles).length).toBe(4);
        });
    } );

    describe('removeVowels', () => {
        it('should be a function', () => {
            expect(typeof removeVowels).toBe('function');
        });
        it('should return an empty string, if no params', () => {
            expect(typeof removeVowels()).toBe('string');
        });
        it('should return a text without vowels', () => {
            expect(removeVowels('hello world')).toBe('hll wrld');
            expect(removeVowels('my text')).toBe('m txt');
            expect(removeVowels('hola la vida')).toBe('hl l vd');
            expect(removeVowels('my text')).toBe('m txt');
        });
    } );
})