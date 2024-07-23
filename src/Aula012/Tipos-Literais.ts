const person = {
  Name: 'Marlon' as const,
  age: 21
};

function Color(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor
}

console.log(Color('Azul'))

console.log(person)
