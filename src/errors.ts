/**
 * It throws an error when some numbers are missing.
 */
export class InputNumbersError extends Error {
    constructor(operationName: string) {
        super(`For ${operationName}, it's not a number!`);
    }
}