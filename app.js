import {addStudentAPI, getStudentsAPI} from './api.js';

let locatStudent;

let studentForm = document.querySelector("#studentForm");
let studentBody = document.querySelector("#studentTableBody");
let studentFname = document.querySelector("#firstName");
let studentLname = document.querySelector("#lastName");
let email = document.getElementById("email")

const rederTable = (dataArray) => {
    studentBody.innerHTML = "";
    if (dataArray.length === 0) {
        studentBody.innerHTML = `<tr><td colspan="4">No Student Found</td></tr>`;
        return;
    }
    dataArray.forEach((student, index) => {
        studentBody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td>${student.firstname}</td>
            <td>${student.lastname}</td>
            <td>${student.email}</td>
        </tr>`;
    }); 
};

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let studentFormFields = [
        studentFname.value,
        studentLname.value,
        email.value
    ];
    const hasEmtyFields = studentFormFields.some((field) => field.trim() === "");
    if(hasEmtyFields) {
        alert("Please fill in all fields.");
        event.preventDefault();
        return;
    }
    let studentData = {
        firstname: studentFname.value,
        lastname: studentLname.value,
        email: email.value
    };
    let checkIfExist = locatStudent.some(student =>
        JSON.stringify(student) === JSON.stringify(studentData));
    if(checkIfExist){
        alert("This user already exists.");
        return;
    }
    console.log("New Student Data: ", studentData);
    console.log(locatStudent);
    addStudentAPI(studentData);
    studentForm.reset();
    locatStudent = getStudentsAPI();
    rederTable(locatStudent);
});

const initApp = () => {
    locatStudent = getStudentsAPI();
    rederTable(locatStudent);
}

initApp();