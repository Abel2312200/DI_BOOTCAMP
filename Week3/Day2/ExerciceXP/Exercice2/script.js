
let form = document.querySelector('form');
console.log(form);

let firstInputById = document.getElementById('fname');
let secondInputById = document.getElementById('lname');
console.log(firstInputById);
console.log(secondInputById);

let firstInputByName = document.getElementsByName('fname');
let secondInputByName = document.getElementsByName('lname');
console.log(firstInputByName);
console.log(secondInputByName);

let submit = document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
});
let values = document.getElementById('submit').values;
console.log(values)