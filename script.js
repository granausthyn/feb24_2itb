//encapsulation

class Student{
    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setSection(section){
        this.section = section;
    }

    getSection(){
        return this.section;
    }

    setCourse(course){
        this.course = course;
    }

    getCourse(){
        return this.course;
    }

    showInfo(){
        console.log(`${this.name}, ${this.course} is enrroled in section ${this.section}`);
    }

}

let stud = new Student();
stud.setName("POGI AKO");
stud.setCourse("ARKI");
stud.setSection("2ARKIB");

//console.log(stud.getName());
//console.log(stud.getCourse());
//console.log(stud.getSection());

stud.showInfo();