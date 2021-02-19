var students = [];
document.getElementById('submit').addEventListener('click', () => {
	let studentName = document.getElementById('name').value;
	let studentIdNumber = document.getElementById('idNumber').value;
	let studentgpa = document.getElementById('gpa').value;

	if(inputValidation(studentName,  studentIdNumber, studentgpa))
    {
        let student={
            name:studentName,
            id:studentIdNumber,
            gpa:studentgpa
        };
        students.push(student)
        console.log('Student List :',students);
        alert(`${studentName} has added successfully`)
       
    }else{
        alert('error')
    }
});

function validateInput(name,idNumber,gpa){
    if(name=='' || idNumber=='' ||gpa=='' ){
        return false;
    }
    return true;
}
//////////////////////////////////////////////////////
document.getElementById('submit').addEventListener('click', () => {
	let studentName = document.getElementById('name').value;
	let studentIdNumber = document.getElementById('idNumber').value;
	let studentgpa = document.getElementById('gpa').value;

	if(inputValidation(studentName,  studentIdNumber, studentgpa))
    {
        let student={
            name:studentName,
            id:studentIdNumber,
            gpa:studentgpa
        };
      
        //-students.filter(student)
      if(students.filter(id==studentIdNumber )){
           students.re
        console.log('Student List :',students);
        alert(`${studentName} has added successfully`)
      }
      else return;
    }else{
        alert('error')
    }
});

function validateInput(name,idNumber,gpa){
    if(name=='' || idNumber=='' ||gpa=='' ){
        return false;
    }
    return true;
}





// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1