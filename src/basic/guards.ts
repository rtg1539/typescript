// 타입단언을 여러번 사용하는 경우
function someFunc(val: string | number, isNumber: boolean) {
    if (isNumber) {
        (val as number).toFixed(2);
        isNaN(val as number);
    } else {
        (val as string).split('');
        (val as string).toUpperCase();
        (val as string).length;
    }
}

// 타입 가드를 제공하면 타입스크립트가 추론 가능한 특정 범위(scope)에서 타입을 보장
// 타입 가드
function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}

function someFunc2(val: string | number) {
    if (isNumber(val)) {
        val.toFixed(2);
        isNaN(val);
    } else {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}

// typeof 연산자 타입 가드
// typeof 연산자는 number, string, boolean, symbol만 타입 가드로 인식
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof
function someFuncTypeof(val: string | number) {
    if (typeof val === 'number') {
        val.toFixed(2);
        isNaN(val);
    } else {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}

// in 연산자 타입 가드
// in 연산자의 우변은 객체여야 한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in
function someFuncIn(val: any) {
    if ('toFixed' in val) {
        val.toFixed(2);
        isNaN(val);
    } else if ('split' in val) {
        val.split('');
        val.toUpperCase();
        val.length;
    }
}

// instanceof 연산자 타입 가드
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/instanceof
class Cat {
    meow() {}
}
class Dog {
    woof() {}
}
function sounds(ani: Cat | Dog) {
    if (ani instanceof Cat) {
        ani.meow();
    } else {
        ani.woof();
    }
}