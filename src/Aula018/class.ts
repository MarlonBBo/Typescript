export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly CNPJ: string;

  constructor(name: string, cnpj: string){
    this.name = name,
    this.CNPJ = cnpj
  };

  public addCollab(collaborator: Collaborator){
    this.collaborators.push(collaborator)
  }

};

export class Collaborator{
  constructor(
    public readonly name: string,
    public readonly surname: string
  ){}
}



const Company1 = new Company('Ola', '121212121212');
const collab1 = new Collaborator('Marlon', 'Barreto');
const collab2 = new Collaborator('joao', 'Barreto');
const collab3 = new Collaborator('marquin', 'Barreto');

Company1.addCollab(collab1);
Company1.addCollab(collab2);
Company1.addCollab(collab3);

console.log(Company1);
