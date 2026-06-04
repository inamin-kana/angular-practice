




export function whtasMyType<T>( argument: T ): T {
  return argument;
}

const amIstrging = whtasMyType<string>('Hola Mundo');
const amINumber = whtasMyType<number>(123);
const amIArray = whtasMyType<number[]>([1,2,3,4]);

console.log(amIstrging.split(''));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));