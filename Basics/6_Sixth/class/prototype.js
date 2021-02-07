// built-in JavaScript API: prototype
let user = { name: 'Brown', age: 55 };

let admin = {};
admin.__proto__ = user;

console.log(admin.name);
console.log(admin.age);
console.log(admin.__proto__);

admin.role = 'admin';
console.log(admin);
