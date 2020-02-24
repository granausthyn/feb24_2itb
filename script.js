//call function

let stud1 = {name:"pogi ako", course:"CS", section:"2csb",
    displayInfo: function() {
    document.write(`<h2>${this.name}, ${this.course} is enrolled in section ${this.section}`)
    }
}

let stud2 = {name:"panget ka", course:"CRS", section:"3pta"};
let displayInfo = function() {
    document.write(
        `<h2>${this.name}, ${this.course} is enrolled in section ${this.section}`
        )
    }



stud1.displayInfo();

displayInfo.call(stud2);