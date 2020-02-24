//static method

class Student{
    constructor(name, course, section){
        this.name = name;
        this.course = course;
        this.section = section;
    }

    static enroll(subject){
        console.log(`${this.name} is enrolled in ${subject}`)
    }    
}


let stud1 = new Student("Shanen", "PT", "2PTB");
// object when not static
//stud1.enroll("Acad Writing");

Student.enroll("Acad Writing");