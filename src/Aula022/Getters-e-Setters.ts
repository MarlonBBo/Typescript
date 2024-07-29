export class Person {
  constructor(
   private name: string,
   private surname: string,
   private age: number,
   private _CPF: string,
  ){};

   get CPF(): string{
     return this._CPF;
   };

   set CPF(cpf: string){
     this._CPF = cpf
    };
 };

 const person = new Person('Marlon', 'Barreto Borges', 21, '000.000.000-00');

 person.CPF = '1111111111';
 console.log(person.CPF)
