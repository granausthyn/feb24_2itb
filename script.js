//bind fucntion, hingi ka call function tinamad ka mag code eh gago ka kasi eh HAHAHA
let stud1 = {fname:"narg", lname:"areved"};
let stud2 = {fname:"gran", lname:"devera"};

let fullName = function (){
    return this.fname + " " + this.lname;
}

let x = fullName.bind(stud1);
console.log(x());