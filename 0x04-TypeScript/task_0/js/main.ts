interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
}


const student_1: Student = {
  firstName: 'Yosef',
  lastName: 'Samuel',
  age: 24,
  location: 'Addis Ababa',
}

const student_2: Student = {
  firstName: 'Abraham',
  lastName: 'Tesfu',
  age: 24,
  location: 'Adama',
}


const studentList = [student_1, student_2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
