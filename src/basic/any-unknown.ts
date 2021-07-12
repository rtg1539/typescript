// any
let any: any = 123;
any = 'Hello world';
any = {};
any = null;

const list: any[] = [1, true, 'Anything!']

// unknown: any와 최상위 타입
// any와 같이 unknown에는 어떤 타입의 값도 할당할 수 있지만, unknown을 다른 타입에는 할당할 수 없다.

let a: any = 123;
let u: unknown = 123;

let v1: boolean = a; // 모든 타입(any)은 어디든 할당할 수 있다.
let v2: number = u; // 알 수 없는 타입(unknown)은 모든 타입(any)을 제외한 다른 타입에 할당할 수 없다.
let v3: any = u; // OK!
let v4: number = u as number; // 타입을 단언하면 할당할 수 있다.

interface IUser {
    id: string
}



type Result = {
    success: true,
    value: unknown
} | {
    success: false,
    error: Error
}

function getItems(user: IUser): Result {
    // Some logic...
    if (id.isValid) {
        return {
            success: true,
            value: ['Apple', 'Banana']
        };
    } else {
        return {
            success: false,
            error: new Error('Invalid user.')
        }
    }
}