import {greet} from './greet';

describe('greet', () => {
    it('it should include the name in the message - S00188509 ALAN REGAN', () => {
        expect(greet('Frank')).toContain('Frank');
    });
});
