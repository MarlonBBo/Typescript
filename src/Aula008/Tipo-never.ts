export function createError(): never{
  throw new Error('Qualquer erro');
}

createError()
