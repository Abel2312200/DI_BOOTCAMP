//  reading of ages years

let youngerBirthYear = prompt('Age of younger : ');
let olderBirthYear = prompt('Age of older : ');

// ages of each others

let currentYear = new Date().getFullYear(); // current year
let ageYounger = currentYear - youngerBirthYear; // younger's age
let ageOlder = currentYear - olderBirthYear; // older's age

// searching of year

let numberYearHalfAge = ageOlder - ageYounger * 2; // searching number of years to add  
let yearHalfAge =  currentYear + numberYearHalfAge; // Year when the younger one exactly half the age of older

// Result
alert(`This years is ${yearHalfAge}`);


