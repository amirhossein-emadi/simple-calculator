import { InputNumbersError } from "./errors";
import { Decimal } from 'decimal.js';

export function add(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new InputNumbersError('addition');
    }
    return numbers.reduce((result, number) => {
        return result.plus(new Decimal(number));
    }, new Decimal(0)).toNumber();
}

export function subtract(...numbers: number[]): number {
    if (numbers.length === 0) {
        throw new InputNumbersError('subtraction');
    }
    let subtractResult = new Decimal(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
        subtractResult = subtractResult.minus(new Decimal(numbers[i]));
    }
    return subtractResult.toNumber();
}
