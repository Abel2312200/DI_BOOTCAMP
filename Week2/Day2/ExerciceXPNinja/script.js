// Exercice 1

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

// Exercice 2

    // Reading of value
    let zipCode = prompt(`Please tap your zip code`);

    // first way : without Regular Expressions
    if(typeof(zipCode)=='number' && zipCode.length == 5 && !(zipCode.trim().search(" "))){
        console.info('Succès');
    } else {
        console.error('Error');
    }

    // second way : using Regular Expressions
    


// Exercice 3

    // Question 1 :   



