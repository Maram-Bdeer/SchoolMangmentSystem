var students = [];
document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gpaInputEl = document.getElementById('gpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gpaInputEl.value);

	// Show success message
	showMessage('success');

    students = null;
});

function inputValidation(name, id, gpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gpa == '') {
		alert('Please insert the student gpa');
	}
}

function insertStudent(name, id, gpa) {
	let student = {
		name: name,
		id: id,
		gpa: gpa,
	};
	students.push(student);
    console.log('students array: ', students);
}
var listElement = document.getElementById('elemntId');

var studentNameElement = document.createElement('div');
var studentIdElement = document.createElement('div');
var studentGPAElement = document.createElement('div');  
 studentNameElement.innerHTML = students[i].Name
listElement.appendChild(studentNameElement);

this.col = [];

this.createTable = function () {

	// EXTRACT VALUE FOR TABLE HEADER.
	for (var i = 0; i < this.student.length; i++) {
		for (var key in this.student[i]) {
			if (this.col.indexOf(key) === -1) {
				this.col.push(key);
			}
		}
	}

	// CREATE A TABLE.
	var table = document.createElement('table');
	table.setAttribute('id', 'studentTable');     // SET TABLE ID.

	var tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).

	for (var h = 0; h < this.col.length; h++) {
		// ADD TABLE HEADER.
		var th = document.createElement('th');
		th.innerHTML = this.col[h].replace('_', ' ');
		tr.appendChild(th);
	}

	// ADD ROWS USING JSON DATA.
	for (var i = 0; i < this.myBooks.length; i++) {

		tr = table.insertRow(-1);           // CREATE A NEW ROW.

		for (var j = 0; j < this.col.length; j++) {
			var tabCell = tr.insertCell(-1);
			tabCell.innerHTML = this.student[i][this.col[j]];
		}

		// DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.

		this.td = document.createElement('td');

		// *** CANCEL OPTION.
		tr.appendChild(this.td);
		var lblCancel = document.createElement('label');
		lblCancel.innerHTML = '✖';
		lblCancel.setAttribute('onclick', 'crudApp.Cancel(this)');
		lblCancel.setAttribute('style', 'display:none;');
		lblCancel.setAttribute('title', 'Cancel');
		lblCancel.setAttribute('id', 'lbl' + i);
		this.td.appendChild(lblCancel);

		// *** SAVE.
		tr.appendChild(this.td);
		var btSave = document.createElement('input');

		btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
		btSave.setAttribute('value', 'Save');
		btSave.setAttribute('id', 'Save' + i);
		btSave.setAttribute('style', 'display:none;');
		btSave.setAttribute('onclick', 'crudApp.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
		this.td.appendChild(btSave);

	}
}
function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}
