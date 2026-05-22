//One data type to another data type coversion is called type coercion
//In JavaScript, type coercion can happen in two ways: implicit and explicit.

//Implicit Type Coercion
//In implicit type coercion, JavaScript automatically converts 
//one data type to another when performing operations. 

console.log("5" +10);
console.log("5" -10);

//Explicit Type Coercion
//In explicit type coercion, you can manually convert a value from one data type to another using built-in functions or methods.

let string ="100";
let num =Number(string);
console.log(num);
console.log(typeof num);  //string to num

const num1=1234;
const str=String(num1);
console.log(str);
console.log(typeof str); //num to srting










