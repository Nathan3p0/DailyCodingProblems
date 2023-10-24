const rearrangeString = require('../problems/noTwoAdjacentCharacters');

describe('rearrangeString', () => {
    it('should return a string with no adjacent repeated characters', () => {
        const result = rearrangeString('aaabbc');
        expect(result).not.toBeNull();
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i]).not.toEqual(result[i + 1]);
        }
    });

    it('should return null for strings where rearrangement is not possible', () => {
        expect(rearrangeString('aaab')).toBeNull();
    });
});