const sumOfTwoNumbers = require('../problems/sumOfTwoNumbers');

describe('sumOfTwoNumbers', () => {
    it('should return true if two numbers in the array sum up to k', () => {
        expect(sumOfTwoNumbers([1, 2, 3, 4, 5], 8)).toBe(true);
    });

    it('should return false if no two numbers in the array sum up to k', () => {
        expect(sumOfTwoNumbers([1, 2, 3, 4, 5], 10)).toBe(false);
    });

    it('should handle negative numbers', () => {
        expect(sumOfTwoNumbers([-1, -2, 3, 4, 5], 2)).toBe(true);
    });

    it('should return false for an empty array', () => {
        expect(sumOfTwoNumbers([], 5)).toBe(false);
    });

    it('should return false for an array with a single element', () => {
        expect(sumOfTwoNumbers([5], 5)).toBe(false);
    });

    it('should return true for duplicate numbers that sum to k', () => {
        expect(sumOfTwoNumbers([2, 2, 3, 4, 5], 4)).toBe(true);
    });

    it('should return false if k is zero', () => {
        expect(sumOfTwoNumbers([2, 3, 4, 5], 0)).toBe(false);
    });
});