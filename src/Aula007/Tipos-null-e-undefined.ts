let x;

if (typeof x === 'undefined' ) {
  x = null
}

export function createPerson(firstName: string, lastName?: string): {
  firstName: string,
  lastName?: string
} {
  return {firstName, lastName}
}

export function squareOf(x: any){
  if(typeof x === 'number'){
    return x * x;
  } else {
    return null;
  }
}

const squareOfTwo = squareOf(10);

if(typeof squareOfTwo === 'number') {
  console.log(squareOfTwo);
} else {
  console.log('Numero inválido')
}


