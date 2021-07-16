/*
interface INAME {
    [INDEXER_NAME: INDEXER_TYPE]: RETURN_TYPE // Index signature
}
*/
// indexable은 string과 number만 지정할 수 있다
interface IItem {
    [itemIndex: number]: string // Index signature

}
let item: IItem = ['a', 'b', 'c']; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
// console.log(item['0']); // Error - TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.

interface Item {
    [key: string]: string
}

// 숫자는 문자형으로 변경 가능
let ii: Item = { 1: 'a' }


interface IUser {
    [userProp: string]: string | number
    name: string,
    age: number
}
let user: IUser = {
    name: 'ho',
    age: 123,
    email: 'hohoit@gmail.com',
    isAdult: true // Error - TS2322: Type 'true' is not assignable to type 'string | number'.
};
console.log(user['name']); // 'Neo'
console.log(user['age']); // 123
console.log(user['email']); // thesecon@gmail.com


// keyof
interface ICountries {
    KR: string,
    US: string,
    CP: string
}
let country: keyof ICountries; // 'KR' | 'US' | 'CP'
country = 'KR'; // ok
country = 'RU'; // Error - TS2322: Type '"RU"' is not assignable to type '"KR" | "US" | "CP"'.

const country2: ICountries = {
    KR: 'a',
    US: 'a',
    CP: 'a',
}

function a(a: keyof ICountries) {
    console.log(country2[a])
}
function b(b: string) {
    console.log(country2[b]) // TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'ICountries'.
}