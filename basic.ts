// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = 'blue';
color = 'red';

// 변수 선언과 초기화를 동시에 진행할 경우 타입을 명시적으로 지정해 주지 않아도 됨
let str = 'string';
let bool = false;
let num = 1234;

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

// Enum
enum Week {
    Sun,
    Mon,
    Tue,
    Wed = 5,
    Thu,
    Fri = 10,
    Sat = 20,
    asd
}
console.log(Week)
console.log(Object.values(Week))
console.log(Object.keys(Week))
console.log(Object.entries(Week))

enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}
