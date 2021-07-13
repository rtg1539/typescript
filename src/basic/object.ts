// typeof 연산자가 "object"로 반환하는 모든 타입을 나타낸다.
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();

// 객체 속성(Properties)들에 대한 타입을 개별적으로 지정할 수 있다.
let userA: { name: string, age: number } = {
    name: 'hoho',
    age: 123
};

let userB: { name: string, age: number } = {
    name: 'hoho',
    age: false, // Error
    email: 'thesecon@gmail.com' // Error
};

// interface나 type을 사용하는것이 좋다.
interface IUser {
    name: string,
    age: number
}

let userC: IUser = {
    name: 'hoho',
    age: 123
};

let userD: IUser = {
    name: 'hoho',
    age: false, // Error
    email: 'thesecon@gmail.com' // Error
};