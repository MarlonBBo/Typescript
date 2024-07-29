export class Person {
  constructor(
   public name: string,
   public surname: string,
   private age: number,
   protected CPF: string,
  ){};

   public getAge(): number{
     return this.age;
   };

   public getCPF(): string{
     return this.CPF;
   };

   public getNamecomplet(): string{
     return this.name + ' ' + this.surname;
   };
 };

 export class Student extends Person {
   constructor(
    name: string,
    surname: string,
    age: number,
    CPF: string,
    public classroom: string
   ){
    super(name, surname, age, CPF)
   }
 };
 export class Client extends Person {
   public getNamecomplet(): string{
     return 'Comes from the client ' + this.name + ' ' + this.surname;
   };
 };

 const person = new Person('Marlon', 'Barreto Borges', 21, '000.000.000-00');
 const student = new Student('Marlon', 'Barreto Borges', 21, '000.000.000-00', '219');
 const client = new Client('Marlon', 'Barreto Borges', 21, '000.000.000-00');


 console.log(student);
 console.log(person);
 console.log(client);
