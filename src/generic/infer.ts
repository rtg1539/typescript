// T extends infer U ? X : Y

type MyType<T> = T extends infer R ? R : null;

const a: MyType<number> = 123;


type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

function fn(num: number) {
  return num.toString();
}

const a: ReturnType<typeof fn> = 'Hello';