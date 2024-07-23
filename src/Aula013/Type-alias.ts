type Age = number;

type Person = {
  name: string,
  age: Age,
  wage: number,
  favouriteColour?: string
};

type ColorRGB = 'Vermelho'| 'Verde' | 'Azul';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Preto';
type FavouriteColour = ColorRGB | ColorCMYK;

const Cara: Person = {
  name: 'Marlon',
  age: 21,
  wage: 15000,
};

export function createPerson(person: Person, color: FavouriteColour): Person {
  const NewPerson: Person = {
    ...person, favouriteColour: color
  };

  return NewPerson
}

console.log(Cara);
console.log(createPerson(Cara, 'Azul'));



