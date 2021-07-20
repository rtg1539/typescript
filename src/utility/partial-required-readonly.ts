//partial
interface IUser3 {
  name: string,
  age: number
}

const user3A: IUser3 = { // TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'IUser'.
  name: 'A'
};
const user3B: Partial<IUser3> = {
  name: 'B'
};

// 위와 같음
interface User3 {
  name?: string,
  age?: number,
}

// required
interface IUser4 {
  name?: string,
  age?: number
}

const user4A: IUser4 = {
  name: 'A'
};
const user4B: Required<IUser4> = { // TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Required<IUser>'.
  name: 'B'
};

// 위와 같음
interface User4 {
  name: string,
  age: number
}

// readonly
interface IUser5 {
  name: string,
  age: number
}

const user5A: IUser5 = {
  name: 'A',
  age: 12
};
userA.name = 'AA';

const user5B: Readonly<IUser5> = {
  name: 'B',
  age: 13
};
userB.name = 'BB'; // TS2540: Cannot assign to 'name' because it is a read-only property.

// 위와 같음
interface User5 {
  readonly name: string,
  readonly age: number
}