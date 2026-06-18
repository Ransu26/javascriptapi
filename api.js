let mockStudentDb = [];

let student1 = new Object();
let student2 = new Object();

student1.firstname = "Light";
student1.lastname = "Yagami";
student1.email = "l@mail.com";

student2.firstname = "L";
student2.lastname = "Lawliet";
student2.email = "l@lawliet.com";

addStudentAPI(student1);
addStudentAPI(student2);

export function getStudentsAPI(){
    return mockStudentDb;
}

export function addStudentAPI(newStudentData){
    let savedStudent = new Object();
    savedStudent.id = Date.now();
    savedStudent.firstname = newStudentData.firstname;
    savedStudent.lastname = newStudentData.lastname;
    savedStudent.email = newStudentData.email;
    mockStudentDb.push(savedStudent);
    return savedStudent;
}
let student3 = new Object();
student3.firstname = "V";
student3.lastname = "Vawliet";
student3.email = "v@vawliet.com";
console.log("Initial DB State:");
console.log(getStudentsAPI());
console.log("Returned Saved Object: ");
console.log(addStudentAPI(student3));
console.log("Updated DB State:");
console.log(getStudentsAPI());