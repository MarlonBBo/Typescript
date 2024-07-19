/*eslint-disable*/


// Tipos básicos
let username: string = 'Marlon';
let age: number = 21;
let adult: boolean = true;
let symbol: symbol = Symbol('any symbol');

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];

let arrayOfStrings: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

//Objects
const pessoa: {username: string, age: number, adult?: boolean} = {
    age: 21,
    username: 'Marlon'
};

//Functions
function add(x: number, y:number){
    return x + y;
}
const result = add(2,3);

const add2: (x: number, y:number) => number = (x, y) => x + y



