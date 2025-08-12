import {add, subtract} from '../src/calculator';
import {describe, test, expect} from '@jest/globals';
import {InputNumbersError} from "../src/errors";

describe('add', () => {
    test('adds 3 to 4 (2 numbers)', () => {
        expect(add(3, 4)).toBe(7);
    });
    test('adds 4, 1 to 9 (3 numbers)', () => {
        expect(add(4, 1, 9)).toBe(14);
    });
    test('adds -28, 891, -49 to 111 (4 numbers)', () => {
        expect(add(-28, 891, -49, 111)).toBe(925);
    });
    test('adds 2.6 to 1.1 (2 floating-point numbers)', () => {
        expect(add(2.6, 1.1)).toBeCloseTo(3.7);
    });
    test('adds 2.016 to -1.021 (2 floating-point numbers)', () => {
        expect(add(2.016, -1.021)).toBeCloseTo(0.995);
    });
    test('It\'s only a number as parameter (1 number)', () => {
        expect(add(25)).toBe(25);
    });
    test('throws an InputNumbersError when it\'s not a number as parameter', () => {
        expect(() => add()).toThrow(InputNumbersError);
        expect(() => add())
            .toThrow('For addition, it\'s not a number!');
    });
});

describe('subtract', () => {
    test('subtracts 12 from 7', () => {
        expect(subtract(12, 7)).toBe(5);
    });
    test('subtracts -3, 8 from 11', () => {
        expect(subtract(-3, 8, 11)).toBe(-22);
    });
    test('subtracts 101, -97, 245 from -890', () => {
        expect(subtract(101, -97, 245, -890)).toBe(843);
    });
    test('subtracts 191.2807816, 78.017, -12.25 from -89.2175', () => {
        expect(subtract(191.2807816, 78.017, -12.25, -89.2175)).toBe(214.7312816);
    });
    test('throws an InputNumbersError when it\'s not a number as parameter', () => {
        expect(() => subtract()).toThrow(InputNumbersError);
        expect(() => subtract()).toThrow('For subtraction, it\'s not a number!');
    });
    test('It\'s only a number as parameter', () => {
        expect(subtract(1344)).toBe(1344);
    });
});
