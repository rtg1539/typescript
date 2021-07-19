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

// ===
interface User3 {
  name?: string,
  age?: number,
}