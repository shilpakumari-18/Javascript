//(??) in JavaScript is used to provide a default value only when
// the left side is:null or undefined. 

let name=null;   
let result=name??"Guest"; 
console.log(result);           // ouptput will be Guest, bcz value1  is null.

let age=undefined;
let result1=age??18;
console.log(result1);          // output will be 18, bcz value1 is undefined.

let city="New York";
let result2=city??"Unknown";
console.log(result2);         // output will be New York, bcz value1 is not null or undefined.