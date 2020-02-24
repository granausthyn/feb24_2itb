//using object literal; directly assigning to a variable
let person = { name: "gran de vera", gender: "male", age: 25 };

console.log(`${person.name} is a ${person.gender} whose age is ${person.age}`);

//using factory function

function createPerson(name, gender, age) {
    let p = {};
    p.name = name;
    p.gender = gender;
    p.age = age;
}

let gran = createPerson('Gran Austhyn De Vera', 'Male', 20);
console.log(`${gran.name} is a ${gran.gender} whose age is ${gran.age}`);

//using constructor function

function Person(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let juan = new Person('Juan Dela Cruz', 'Male', 25);

document.write(`${juan.age} si ${juan.name} at siya ay isang ${juan.gender}`);