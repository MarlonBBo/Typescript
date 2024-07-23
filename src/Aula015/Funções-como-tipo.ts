type TypeCallback = (item: string) => string;

export function mapString(array: string[], callbackfn: TypeCallback): string[]{
  const newArray: string[] = [];

  for(let i = 0; i < array.length; i++){
    newArray.push(callbackfn(array[i]));
  };
  return newArray;
}

const abc: string[] = ['a', 'b', 'c'];
const abcMap = mapString(abc, (item)=> item.toLocaleUpperCase());

console.log(abc);
console.log(abcMap);
