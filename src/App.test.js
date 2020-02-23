import { hello } from './App.js';

describe('hello', () => {
    it('should be a function ', () => {
        expect(typeof hello).toBe('function');
    });
    it('should return a string', () => {
        expect(hello()).toBe('Hello');
        expect(typeof hello()).toBe('string');
    });
});