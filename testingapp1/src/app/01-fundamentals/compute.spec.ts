import {compute} from '01-fundamentals/compute';

describe('compute', () => {
    it('should return 0 if the input is negative - S00188509 ALAN REGAN', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 1 if the input is postive - S00188509 ALAN REGAN', () => {
        const result = compute(1);
        expect(result).toBe(0);
    });
});