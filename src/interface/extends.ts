// 인터페이스 확장
interface IParent {
  p: string
}

interface IChild extends IParent{
  c: string
}

// Error - TS2741: Property 'p' is missing in type '{ c: string; }' but required in type 'IChild'.
const child: IChild = {
  c: 'a',
}

const child2: IChild = {
  c: 'a',
  p: 'a'
}

class Cat implements ICat { // Error - TS2420: Class 'Cat' incorrectly implements interface 'ICat'. Property 'name' is missing in type 'Cat' but required in type 'ICat'.
  name = 'a';
  meow() {
    return 'MEOW~'
  }
}

// 같은 이름의 인터페이스 정의 가능
interface IFullName {
  firstName: string,
  lastName: string
}
interface IFullName {
  middleName: string
}

const fullName: IFullName = {
  firstName: 'Tomas',
  middleName: 'Sean',
  lastName: 'Connery'
};

