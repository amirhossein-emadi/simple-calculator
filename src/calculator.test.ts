import { add } from './calculator';
import { describe, test, expect } from '@jest/globals';

describe('add', () => {
    test('adds 3 to 4', () => {
        expect(add(3, 4)).toBe(7);
    });
});
