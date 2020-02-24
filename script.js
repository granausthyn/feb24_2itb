//using object literal; directly assigning to a variable
let person = {name:"gran de vera", gender:"male", age:25};

console.log(`${person.name} is a ${person.gender} whose age is ${person.age}`);

//using factory function

function createPerson(name, gender, age){
    let p = {};
    p.name = name;
    p.gender = gender;
    p.age = age;
}