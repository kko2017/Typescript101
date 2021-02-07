// ES2015 (ES6)
class Person {
    constructor(name, age) {
        console.log('Ctor');
        this.name = name;
        this.age = age;
    }
} 

let person = new Person('Capt', 35);
console.log(person.name);
console.log(person.age);