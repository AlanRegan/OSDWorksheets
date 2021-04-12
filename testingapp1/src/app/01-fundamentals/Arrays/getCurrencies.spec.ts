import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
    it('it should include USD, GDP and EUR - S00188509 ALAN REGAN', () => {
        const result = getCurrencies();
        expect(result).toEqual(jasmine.arrayContaining(["USD", "GDP", "EUR"]))
    });
});

// describe('getCurrencies', () => {
//     it('it should fail as it does not include the last currency - S00188509 ALAN REGAN', () => {
//         const result = getCurrencies();
//         expect(result).toEqual(jasmine.arrayContaining(["USD", "GDP", "EUR", "LOL"]))
//     });
// });