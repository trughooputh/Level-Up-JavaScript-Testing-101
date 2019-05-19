import { hello, add, myVar, square, removeTNames } from './App.js';

// Function
describe('hello', () => {
    it('should output Hello ', () => {
        expect(hello()).toBe('Hello');
    });
    it('should return a string', () => {
        expect(typeof hello()).toBe('string');
    });
});
describe('add function', () => {
    it('should return a number value', () => {
        expect(add(1,2)).toBe(3);
        expect(add(4,4)).toBe(8);
        expect(add(0,1)).toBe(1);
        expect(add(0,0)).toBe(0);
        expect(add(-2,0)).toBe(-2);
        expect(add(-2,-2)).toBe(-4);
    });
    it('should return a number', () => {
        expect(add(1,2)).toBe(3);
        expect(add(1,"2")).toBe(null);
        expect(add("1",2)).toBe(null);
        expect(add("1","2")).toBe(null);
        expect(add(1,{})).toBe(null);
        expect(add([],2)).toBe(null);
    });
});

describe('square function', () => {
    it('should return a number value', () => {
        expect(square(2)).toBe(4);
        expect(square(3)).toBe(9);
    });
    it('should return a number', () => {
        expect(square(2)).toBe(4);
        expect(square("3")).toBe(null);
    });
    it('should be positive', () => {
        expect(square(-2)).not.toBeLessThan(0);
    });
});

describe('removeTNames', () => {
    const names = ['Thomas', 'Carolina', 'Tandoori', 'Marco', 'thomas'];
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

// String
describe('myVar', () => {
    it('should be a type string ', () => {
        expect(typeof myVar).toBe('string')
    });
});