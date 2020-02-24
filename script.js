//using ES6 Syntax

class Person{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    walk(distance){
        console.log(`${this.name} can walk up to ${distance} miles...`);
    }
}

let granD = new Person('narG arev Ed','male', 20);
granD.walk(5);