import {add} from './calculator';
import {describe, test, expect} from '@jest/globals';
import {InputNumbersError} from "./errors";

describe('add', () => {
    test('adds 3 to 4 (2 numbers)', () => {
        expect(add(3, 4)).toBe(7);
    });
    test('adds 4, 1 and 9 (3 numbers)', () => {
        expect(add(4, 1, 9)).toBe(14);
    });
    test('adds -28, 891, -49 and 111 (4 numbers)', () => {
        expect(add(-28, 891, -49, 111)).toBe(925);
    });
    test('there is only 1 parameter - 25 (1 number)', () => {
        expect(add(25)).toBe(25);
    });
    test('throws an InputNumbersError when there is no parameter', () => {
        expect(() => add()).toThrow(InputNumbersError);
        expect(() => add()).toThrow('For addition, you must insert at least one number!');
    });
});
