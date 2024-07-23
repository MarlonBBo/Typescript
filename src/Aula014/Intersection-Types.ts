type Name = {name: string};
type Age = {age: number};
type Surname = {surname: string};
type Person = Name & Age & Surname; // AND

const user: Person = {
  name: 'Marlon',
  age: 21,
  surname: 'Barreto Borges'
};

console.log(user);
