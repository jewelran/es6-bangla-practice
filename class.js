// class student{
//     constructor(){
//         this.id= 1;
//         this.name= "mahi"
//     }
// }
// const student1 = new  student();
// const student2 = new  student();
// const student3 = new  student();
// console.log(student1, student2,student3);

// secound wey.............
class student{
    constructor(sId, sName){
        this.id= sId;
        this.name=sName;
        this.school = "kolimunnesa school"
    }
}
const student1 = new  student(12," jewel");
const student2 = new  student(21," rana");
const student3 = new  student(43," routa");
console.log(student1, student2,student3);



class father{
    constructor(){
        this.fatherName = "abul kashem"
    }
}
class child extends father {
    constructor(name){
        super();
        this.childName =  name;
    }
    getFunction(){
        return   `${this.fatherName} ${this.childName}`;
    }
}

const childName = new child("jewel");
console.log(childName.getFunction());




