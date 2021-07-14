// 타입단언(assertions): union 타입일 때 해당 변수가 어떤 타입인지 단언하는 것
function someFunc(val: string | number, isNumber: boolean) {
    // some logics
    if (isNumber) {
        val.toFixed(2); // Error - TS2339: ... Property 'toFixed' does not exist on type 'string'.
    }
}

function someFunc2(val: string | number, isNumber: boolean) {
    // some logics
    if (isNumber) {
        // 1. 변수 as 타입
        (val as number).toFixed(2);
        // Or
        // 2. <타입>변수
        // (<number>val).toFixed(2);
    }
}

// non-null: 값이 null 이나 undefined 가 아니라는 것을 단언하는 것
// Error - TS2533: Object is possibly 'null' or 'undefined'.
function fnA(x: number | null | undefined) {
    return x.toFixed(2);
}

// if statement
function fnD(x: number | null | undefined) {
    if (x) {
        return x.toFixed(2);
    }
}

// Type assertion
function fnB(x: number | null | undefined) {
    return (x as number).toFixed(2);
}
function fnC(x: number | null | undefined) {
    return (<number>x).toFixed(2);
}

// Non-null assertion operator
function fnE(x: number | null | undefined) {
    return x!.toFixed(2);
}