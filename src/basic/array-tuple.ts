// Array
let list: number[] = [1, 2, 3];
// or use Generic
let list2: Array<number> = [1, 2, 3];
// use union type
let list3: (number | string)[] = ['a', 1, 2]

// readonly 값 할당 및 푸시 x
let arrA: readonly number[] = [1, 2, 3, 4];
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];

arrA[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrA.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

arrB[0] = 123; // Error - TS2542: Index signature in type 'readonly number[]' only permits reading.
arrB.push(123); // Error - TS2339: Property 'push' does not exist on type 'readonly number[]'.

// Tuple (고정 길이 배열)
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['a', 1, 2]; // Error - TS2322
tuple = [1, 'a']; // Error - TS2322

// Tuple은 정해진 타입의 고정된 길이 배열을 표현
// 하지만 .push()나 .splice() 등을 통해 값을 넣는 것은 막을 수 없음
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['b', 2];
tuple.push(3);
console.log(tuple); // ['b', 2, 3];
tuple.push(true); // Error - TS2345: Argument of type 'true' is not assignable to parameter of type 'string | number'.