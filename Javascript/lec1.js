// node js is runtime environment used to run javascript outside browser.

console.log("hello");

// variable declaration -- let, const, var

let greeting = "welcome to JavaScript"; // let can be reassigned but not redefined within same block.
console.log(greeting); 

const a = 23; // const cannot be reassigned and redefined.
const b = 33;
console.log(a);

var c = "this is js"; // var can be redefined and reassigned.
console.log(c);

var c = "this is javascript";
console.log(c);

//Operations

sum = a+b;  //Addition
console.log("sum of a and b is: ", sum);

diff = a-b;  //subtraction
console.log("difference of a and b is: " , diff);

product = a*b;  //multiplication
console.log("product of a and b is: ", product);

exponential = a**b;  //Exponential
console.log("value of a raise to power b is (exponential): ", exponential);

d = NaN + 1;
console.log("Addition in NaN is: ", d);

//typeof -- to check the type of data.

console.log(typeof a);
console.log(typeof c);
console.log(typeof NaN);  //NaN is known as Not-A-Number, but its datatype is number.

// Post-Increement

let age = 30;
console.log("Initial Age: ", age);
let newage = age++;
console.log("Age after post increement: ", newage);
console.log("Age after post increement (age): ", age);