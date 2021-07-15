interface IUser {
    name: string,
    age: number,
    isAdult: boolean
}

let user1: IUser = {
    name: 'Neo',
    age: 123,
    isAdult: true
};

// Error - TS2741: Property 'isAdult' is missing in type '{ name: string; age: number; }' but required in type 'IUser'.
let user2: IUser = {
    name: 'Evan',
    age: 456
};

// optional
interface IUser {
    name: string,
    age: number,
    isAdult?: boolean // Optional property
}

// isAdult를 초기화하지 않아도 된다.
let user: IUser = {
    name: 'Neo',
    age: 123
};

// readonly
interface IUser {
    readonly name: string,
    age: number
}

let user: IUser = {
    name: 'Neo',
    age: 36
};

user.age = 85; // Ok
user.name = 'Evan'; // Error - TS2540: Cannot assign to 'name' because it is a read-only property.




// All readonly properties
interface IUser {
    readonly name: string,
    readonly age: number
}
let user: IUser = {
    name: 'Neo',
    age: 36
};
user.age = 85; // Error
user.name = 'Evan'; // Error


// Readonly Utility
interface IUser {
    name: string,
    age: number
}
let user: Readonly<IUser> = {
    name: 'Neo',
    age: 36
};
user.age = 85; // Error
user.name = 'Evan'; // Error


// Type assertion
let user = {
    name: 'Neo',
    age: 36
} as const;
user.age = 85; // Error
user.name = 'Evan'; // Error