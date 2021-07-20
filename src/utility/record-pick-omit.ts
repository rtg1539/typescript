// record
type TName = 'neo' | 'lewis';

const developers: Record<TName, number> = {
  neo: 12,
  lewis: 13
};

// 위와 같음
interface INewType {
  neo: number,
  lewis: number
}

// pick
interface IUser {
  name: string,
  age: number,
  email: string,
  isValid: boolean
}
type TKey = 'name' | 'email';

const user: Pick<IUser, TKey> = {
  name: 'Neo',
  email: 'thesecon@gmail.com',
  age: 22 // TS2322: Type '{ name: string; email: string; age: number; }' is not assignable to type 'Pick<IUser, TKey>'.
};

// 위와 같음
interface INewType {
  name: string,
  email: string
}

// omit
interface IUser {
  name: string,
  age: number,
  email: string,
  isValid: boolean
}
type TKey = 'name' | 'email';

const user: Omit<IUser, TKey> = {
  age: 22,
  isValid: true,
  name: 'Neo' // TS2322: Type '{ age: number; isValid: true; name: string; }' is not assignable to type 'Pick<IUser, "age" | "isValid">'.
};

// 위와 같음
interface INewType {
  // name: string,
  age: number,
  // email: string,
  isValid: boolean
}


