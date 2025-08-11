import { InputNumbersError } from "./errors";
import { Decimal } from 'decimal.js';

/**
 * It adds all numbers.
 * @param {number[]} numbers the numbers for `+` operation.
 * @return {number} the result of addition.
 * @throws {InputNumbersError} There is no numbers as parameter.
 */
export function add(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new InputNumbersError('For addition, you must insert at least one number!');
    }
    return numbers.reduce((result, number) => {
        return result.plus(new Decimal(number));
    }, new Decimal(0)).toNumber();
}
