var students;

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
	students.filter(student.id==id);
    console.log('students array: ', students);
}
this.td = document.createElement('th');
tr.appendChild(this.td);
var btDelete = document.createElement('input');
btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
btDelete.setAttribute('value', 'Delete');
btDelete.setAttribute('style', 'background-color:#ED5650;');
btDelete.setAttribute('onclick', 'crudApp.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
this.td.appendChild(btDelete);


// ADD A ROW AT THE END WITH BLANK TEXTBOXES AND A DROPDOWN LIST (FOR NEW ENTRY).

tr = table.insertRow(-1);        
this.td = document.createElement('td');
            tr.appendChild(this.td);

            var btNew = document.createElement('input');

            btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
            btNew.setAttribute('value', 'Create');
            btNew.setAttribute('id', 'New' + i);
            btNew.setAttribute('style', 'background-color:#207DD1;');
            btNew.setAttribute('onclick', 'crudApp.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btNew);

            var div = document.getElementById('container');
            div.innerHTML = '';
            div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.
            this.Delete = function (oButton) {
                var activeRow = oButton.parentNode.parentNode.rowIndex;
                this.myBooks.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
                this.createTable();                         // REFRESH THE TABLE.
            };
    
            // SAVE DATA.
            this.Save = function (oButton) {
                var activeRow = oButton.parentNode.parentNode.rowIndex;
                var tab = document.getElementById('studentTable').rows[activeRow];
    
                // UPDATE myBooks ARRAY WITH VALUES.
                for (i = 1; i < this.col.length; i++) {
                    var td = tab.getElementsByTagName("td")[i];
                    if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {  // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                        this.myBooks[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
                    }
                }
                this.createTable();     // REFRESH THE TABLE.
            }
function showMessage(events){
    if (events == 'success') {
        alert('Studnet remove!')
    }else{
        alert('Faild to remove student')
    }
}
///////////////////////////////////////////*/
