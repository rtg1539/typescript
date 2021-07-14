// myFunc는 2개의 숫자 타입 인수를 가지고, 숫자 타입을 반환하는 함수.
let myFunc: (arg1: number, arg2: number) => number;
myFunc = function (x, y) {
    return x + y;
};

// 인수가 없고, 반환도 없는 경우.
let yourFunc: () => void;
yourFunc = function () {
    console.log('Hello world~');
};


// 타입추론(inference): 타입을 명시적으로 선언하지 않을경우 초기화 값에 따라 타입이 자동으로 지정된다.
// 1. 초기화된 변수
let num = 12;
num = 'Hello type!'; // TS2322: Type '"Hello type!"' is not assignable to type 'number'.

// 2. 기본값이 설정된 매개 변수 b
function add(a: number, b = 2) {
    // 3. 반환 값이 있는 함수
    return a + b;// number
}
