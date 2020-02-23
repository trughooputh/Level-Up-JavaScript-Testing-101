import { config } from './index';

describe('config object', () => {
    it('should be an object ', () => {
        expect(typeof config).toBe('object')
    });
    describe('title property', () => {
        it('should exist ', () => {
            expect(config).toHaveProperty('title');
        });
        it('should be a string value', () => {
            expect(typeof config.title).toBe('string');
        });
    });
    describe('description property', () => {
        it('should exist ', () => {
            expect(config).toHaveProperty('description');
        });
        it('should be a string value', () => {
            expect(typeof config.description).toBe('string');
        });
    });
    
});