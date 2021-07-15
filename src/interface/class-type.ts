interface IUser {
    name: string,
    getName(): string
}

class User implements IUser {
    constructor(public name: string) {}
    getName() {
        return this.name;
    }
}

const neo = new User('Neo');
neo.getName(); // Neo

/*
interface ICat {
    name: string
}

class Cat implements ICat {
    constructor(public name: string) {}
}

function makeKitten(c: ICat, n: string) {
    return new c(n); // Error - TS2351: This expression is not constructable. Type 'ICat' has no construct signatures.
}
const kitten = makeKitten(Cat, 'Lucy');
console.log(kitten);*/

interface ICat {
    name: string
}
interface ICatConstructor {
    new (name: string): ICat;
}

class Cat implements ICat {
    constructor(public name: string) {}
}

function makeKitten(c: ICatConstructor, n: string) {
    return new c(n); // ok
}
const kitten = makeKitten(Cat, 'Lucy');
console.log(kitten);


interface IFullName {
    firstName: string,
    lastName: string
}
interface IFullNameConstructor {
    new(firstName: string): IFullName; // Construct signature
}


function makeSon(c: IFullNameConstructor, firstName: string) {
    return new c(firstName);
}
function getFullName(son: IFullName) {
    return `${son.firstName} ${son.lastName}`;
}


// Anderson family
class Anderson implements IFullName {
    public lastName: string;
    constructor (public firstName: string) {
        this.lastName = 'Anderson';
    }
}
const tomas = makeSon(Anderson, 'Tomas');
const jack = makeSon(Anderson, 'Jack');
getFullName(tomas); // Tomas Anderson
getFullName(jack); // Jack Anderson


// Smith family?
class Smith implements IFullName {
    public lastName: string;
    constructor (public firstName: string, agentCode: number) {
        this.lastName = `Smith ${agentCode}`;
    }
}
const smith = makeSon(Smith, 7); // Error - TS2345: Argument of type 'typeof Smith' is not assignable to parameter of type 'IFullNameConstructor'.
getFullName(smith);