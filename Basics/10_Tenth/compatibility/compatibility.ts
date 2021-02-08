interface Ironman {
    name: string;
}

class Avengers {
    name: string;
}

let i: Ironman;
// Ok, becuase of structural typing
i = new Avengers();


interface Person {
    name: string;
    skill: string;
}

// class Person {
//     name: string;
// }

interface Developer {
    name: string;
}

let developer: Developer;
let person: Person;

// 좌변수가 우변수보다 더 많은 자산을 가지고 있으면, 에러가 발생한다. 
person = developer;
developer = person;
// developer = new Person();


// function
let add = function (a: number) {
    //...
};

let sum = function (a: number, b: number) {
    //...
};

add = sum;
sum = add;

// Generic
interface Empty<T> {
    //...
}

let em1: Empty<string>;
let em2: Empty<number>;
em1 = em2;
em2 = em1;


interface NotEmpty<T> {
    name: T;
}

let em3: NotEmpty<string>;
let em4: NotEmpty<number>;
em3 = em4;
em4 = em3;