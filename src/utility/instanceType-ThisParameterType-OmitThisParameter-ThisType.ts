// InstanceType
class User3 {
  constructor(public name3: string) {}
}

const neo3: InstanceType<typeof User3> = new User3('Neo');
console.log(neo3.name3)


// ThisParameterType
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}


// OmitThisParameter
function getAge(this: typeof cat) {
  return this.age;
}

// 기존 데이터
const cat = {
  age: 12 // Number
};
getAge.call(cat); // 12

// 새로운 데이터
const dog = {
  age: '13' // String
};
getAge.call(dog); // TS2345: Argument of type '{ age: string; }' is not assignable to parameter of type '{ age: number; }'.

const getAgeForDog: OmitThisParameter<typeof getAge> = getAge;
getAgeForDog.call(dog); // '13'


// ThisType
interface IUser {
  name: string,
  getName: () => string
}

function makeNeo(methods: ThisType<IUser>) {
  return { name: 'Neo', ...methods } as IUser;
}
const neo = makeNeo({
  getName() {
    return this.name;
  }
});

neo.getName(); // Neo