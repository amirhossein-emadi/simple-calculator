export function add(...numbers: number[]): number {
    return numbers.reduce((result, number) => {
        return result + number;
    }, 0);
}
