// type assertion
let a;
a = 10;
a = 'abc';
// TypeScript can't infer type of a and b even after defining a several times
// You better know the difference between declaration and definition 
let b = a;

// For the above case, a developer can assert datatype using as. It is called, type assertion 
let c = a as string;


// Type assertion is widely utilized in DOM api manipulation.
let div = document.querySelector('div');
// In this above case, TLS doesn't assure whether div exists. So, it says it could be HTMLDivElement or null using union
// Therefore, developer has to use in general if statement to make sure that it is not null.
// if (dive) {
//     div.innerHTML
// }
// However, if you use type assertion, you can skip the above process because you assure that this div must not be null.
let div2 = document.querySelector('div') as HTMLDivElement;
div2.innerHTML 