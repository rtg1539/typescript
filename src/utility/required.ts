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

// ===
interface User4 {
  name: string,
  age: number
}