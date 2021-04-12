import {compute} from '01-fundamentals/compute';

describe('compute', () => {
    it('should return 0 if the input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
    it('should return 1 if the input is postive', () => {
        const result = compute(1);
        expect(result).toBe(0);
    });
});