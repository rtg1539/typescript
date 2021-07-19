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

// ===
interface User5 {
  readonly name: string,
  readonly age: number
}