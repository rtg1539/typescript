// exclude
type T = string | number;

const a: Exclude<T, number> = 'Only string';
const b: Exclude<T, number> = 1234; // TS2322: Type '123' is not assignable to type 'string'.
const c: T = 'String';
const d: T = 1234;

// extract
type T = string | number;
type U = number | boolean;

const a: Extract<T, U> = 123;
const b: Extract<T, U> = 'Only number'; // TS2322: Type '"Only number"' is not assignable to type 'number'.


// non nullable
type T = string | number | undefined;

const a: T = undefined;
const b: NonNullable<T> = null; // TS2322: Type 'null' is not assignable to type 'string | number'.

