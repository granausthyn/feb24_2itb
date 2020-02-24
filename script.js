//prototypes

function Student(name, section, course){
    this.name = name;
    this.section = section;
    this.course = course;
}

let froilan = new Student("Froila Big Dick", "2 ITB", "IT");
let gab = new Student("Gab Awesome Boy", "2 ITB", "IT");

Student.prototype.school = "UST";
Student.prototype.study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}...`);
}

//console.log(`${froilan.name} is studying in${froilan.school}`);
froilan.study("ICS609");