export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  protected  readonly CNPJ: string;

  constructor(name: string, cnpj: string){
    this.name = name,
    this.CNPJ = cnpj
  };

  public addCollab(collaborator: Collaborator){
    this.collaborators.push(collaborator)
  }

};

export class ONz extends Company{
  constructor(
    name: string,
    CNPJ: string
  ){ super(name, CNPJ)}

  popCollaborator(): Collaborator | null {
    const deleted = this.collaborators.pop()
    if(deleted) return deleted
    return null;
  };

}

export class Collaborator{
  constructor(
    public readonly name: string,
    public readonly surname: string
  ){}
}



const Company1 = new ONz('Face', '009090909');
const collab1 = new Collaborator('Marlon', 'Barreto');
const collab2 = new Collaborator('joao', 'Barreto');
const collab3 = new Collaborator('marquin', 'Barreto');

Company1.addCollab(collab1);
Company1.addCollab(collab2);
Company1.addCollab(collab3);
const CollaboratorDeleted = Company1.popCollaborator()


console.log(Company1);
console.log(CollaboratorDeleted);

