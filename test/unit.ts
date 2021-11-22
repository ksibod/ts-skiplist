import { describe, it, expect } from 'ts-simple-test';
import { flipCoin, getLevel } from '../src/Utils'

describe('Unit tests', () => {
    it('Utils::flipCoin() toss will return true|false', () => {
        const toss = flipCoin();
        if (toss) {
            expect(toss).toBe(true);
            expect(toss).toBeTruthy();
        }
        else {
            expect(toss).toBe(false);
            expect(toss).toBeFalsy();
        }
    });
  
    it('Utils::getLevel() will return a value >= 1 and <= max_value', () => {
        const max = 10;
        const level = getLevel(max);
        expect(level).toBeTruthy();
        expect(level).toBeGreaterThanOrEqualTo(1);
        expect(level).toBeLessThanOrEqualTo(max);
    });
});
