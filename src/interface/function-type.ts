// 함수 타입을 인터페이스로 정의하는 경우, 호출 시그니처(Call signature)를 사용
// 호출 시그니처는 함수의 매개 변수(parameter)와 반환 타입을 지정
interface IName {
    (hoho: string): string // Call signature
}

interface IUser {
    name: string
}
interface IGetUser {
    (name: string): IUser
}

// 매개 변수 이름이 인터페이스와 일치할 필요가 없습니다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있습니다.
const getUser: IGetUser = function (n) { // n is name: string
    console.log(n)
    return user;
};
getUser('hoit');