// null과 undefined는 모든 타입의 하위 타입, 모든 타입에 할당할 수 있다.
let num: number = undefined;
let str: string = null;
let obj: { a: 1, b: false } = undefined;
let arr: any[] = null;
let und: undefined = null;
let nul: null = undefined;
let voi: void = null;

// 일반적으로 값을 반환하지 않는 함수에서 사용
// void 함수는 undefined를 반환한다.
function hello(msg: string): void {
    console.log(`Hello ${msg}`);
}

const hi: void = hello('world'); // Hello world
console.log(hi); // undefined

// Error - TS2355: A function whose declared type is neither 'void' nor 'any' must return a value.
function hello2(msg: string): undefined {
    console.log(`Hello ${msg}`);
}

// 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 보통 빈 배열을 타입으로 선언한 경우가 해당 된다.
const never: [] = [];
never.push(3); // Error - TS2345: Argument of type '3' is not assignable to parameter of type 'never'.