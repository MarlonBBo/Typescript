
const listOfCustomers: [number, string, string?, ...string[]] = [1, 'marlon'];
const listOfCustomersTwo: readonly [number, string, string?] = [1, 'marlon'];

listOfCustomers[0] = 10;
listOfCustomers[1] = 'João';
listOfCustomers[2] = 'barreto';
listOfCustomers[3] = 'borges';

// listOfCustomersTwo[0] = 100;

console.log(listOfCustomersTwo)
console.log(listOfCustomers);
