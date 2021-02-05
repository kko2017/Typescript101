interface User {
    age: number;
    name: string;
}

// variable implementing interface
var june: User = {
    age: 5,
    name: 'June'
};

// function implementing interface
function getUser(user: User): void {
    console.log(user);
}

const capt: User = {
    name: 'captain',
    age: 100
};

getUser(capt);

// inteface having declarations of a function
interface SumFunction {
    (a: number, b: number): number;
}

let a: SumFunction;
a = function (a: number, b: number) {
    return a + b;
};

// inteface having index
interface StringArray {
    [index: number]: string
}

let strArr: StringArray = ['a', 'b', 'c'];
strArr[0] = 'd';

// Dictionary pattern
interface StringRegexDictionary {
    [key: string]: RegExp
}

let fileRegex: StringRegexDictionary = {
    'cssFile': /\.css$/,
    'htmlFile': /\.html$/
};

// fileRegex['cssFile'] = 'a';

Object.keys(fileRegex).forEach(value => { });


