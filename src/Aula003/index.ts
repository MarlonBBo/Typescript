
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  firtname: 'Marlon',
  lastname: 'Barreto Borges',

  resultPerson(): void {
    console.log(this.firtname + ' ' + this.lastname);
  }
};

noReturn('Marlon', 'Barreto', 'Borges');
person.resultPerson();

export {person}
