import { createDiv } from './Dom.js';

describe('creatDiv function', () => {

    beforeEach(() => {
        const main = document.createElement('main');
        document.body.appendChild(main);
    });

    it('should be a function ', () => {
        expect(typeof createDiv).toBe('function');
    });
    it('should create an HTML element in main', () => {
        createDiv('Hola amigos!');
        const divHTML = document.querySelectorAll('main div')[0];
        expect(divHTML.textContent).toEqual('Hola amigos!');
        expect(divHTML.hasAttribute('id')).toBeTruthy();
    });
    it('should create an HTML element with an id', () => {
        createDiv('Hola amigos!');
        const divHTML = document.querySelectorAll('main div')[0];
        expect(divHTML.hasAttribute('id')).toBeTruthy();
        expect(divHTML.id.startsWith('elmt-')).toBeTruthy();
    });
});