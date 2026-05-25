//it is used to access: object proprties, nested objects,Methods.
//Without Optional chaining:

let user={};
//console.log(user.address.city); //Typerror: Cannot read properties of undefined (reading 'city')

//With Optional chaining:


console.log(user.address?.city); //undefined, it will not throw error, bcz of optional chaining operator (?.)

//Syntax:object?.property- if object exists -access property, if null/undefined object- resturs null/undefined.

const student={
    name:"shilpa"
};
console.log(student.address?.city); //undefined, bcz address is not present in student object.

//Nested objects:

const user2={
    profile:{
        age:22
    }
};
console.log(user2.profile?.age); //22

//with methods

const user3={
    greet(){
        return("Hello");

    }
}
console.log(user3.greet?.());   //Hello

//Optional chaining with arrays

const users=[
    {name:"shilpa"},
    {name:"sonu"}
];
console.log(users[0]?.name); //shilpa
console.log(users[2]?.name); //undefined, bcz index 2 is not present in users array.