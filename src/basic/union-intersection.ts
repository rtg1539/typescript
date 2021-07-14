// unionIntersection 2개 이상의 타입을 허용 = or
let unionIntersection: (string | number);
unionIntersection = 'Hello type!';
unionIntersection = 123;
unionIntersection = false; // Error - TS2322: Type 'false' is not assignable to type 'string | number'.
(unionIntersection as string).indexOf('a');
(unionIntersection as number).toFixed();

// intersection 2개 이상의 타입을 조합 = and
interface IUser2 {
    name: string,
    age: number
}
interface IValidation {
    isValid: boolean
}
const hoit: IUser2 = {
    name: 'hoho',
    age: 36,
    isValid: true // Error -  TS2322: Type '{ name: string; age: number; isValid: boolean; }' is not assignable to type 'IUser'.
};
const ho: IUser2 & IValidation = {
    name: 'ho',
    age: 85,
    isValid: true
};

const ho2: IUser2 & IValidation = {
    name: 'ho',
    age: 85,
    // isValid: true
}; // Error: TS2322: Type '{ name: string; age: number; }' is not assignable to type 'IUser2 & IValidation'

// 상속
interface IUser3 extends IUser2 {
    isValid: boolean
}

const evan: IUser3 = {
    name: 'Evan',
    age: 36,
    isValid: false
};