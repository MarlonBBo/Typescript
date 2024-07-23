//Array<T> - T[]

export function mult(...args: Array<number>): number {
    return args.reduce((ac, valor)=> ac * valor,1);
}

export function joinStrings(...args: string[]): string {
    return args.reduce((ac, valor)=> ac + valor);
}

export function toUpper(...args: string[]): string[] {
    return args.map((valor)=> valor.toUpperCase());
}

const multNum = mult(1, 2, 3);
const join = joinStrings('a', 'b', 'c');
const joinTwo = toUpper('a', 'b', 'c');

console.log(multNum, join, joinTwo);
