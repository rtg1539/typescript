// parameters
function fn(a: string | number, b: boolean) {
  return `[${a}, ${b}]`;
}

const a1: Parameters<typeof fn> = ['Hello', 123]; // Type 'number' is not assignable to type 'boolean'.
// 위와 같음 [string | number, boolean]

// ConstructorParameters
class User2 {
  constructor (public name: string, private age: number) {}
}

const neo2 = new User2('Neo', 12);
const a2: ConstructorParameters<typeof User2> = ['Neo', 12];

// TS2741: Property '1' is missing in type '[string]' but required in type '[string, number]'.
const b2: ConstructorParameters<typeof User2> = ['Lewis'];
// <typeof User2> === [string, number]

// ReturnType
function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = 'Only string';
const b: ReturnType<typeof fn> = 1234; // TS2322: Type '123' is not assignable to type 'string'.