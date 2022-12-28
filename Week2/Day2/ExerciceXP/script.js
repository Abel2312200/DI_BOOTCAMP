// Exercice 1

    // Question 1 : creation of variables x and y
    let x=2, y= 5;

    // Question 2 : checking which number is bigger
    if(x<y){
        console.log(`${y} is biggest number`); // Result to display
    }else{
        console.log(`${x} is biggest number`); // Result to display
    }


// Exercice 2

    // Question 1 : creation of newDog variable
    let newDog = "Chihuahua";

    // Question 2 : letters in newDog variable
    let numberLetterNewDog = newDog.length;
    console.log(`${newDog} has ${numberLetterNewDog} letters.`);

    // Question 3 : displaying newDog in uppercase
    console.log(`${newDog} in uppercase give out ${newDog.toUpperCase}`);

    // Question 4 : checking newDog is equal to "Chihuahua"
    if(newDog === "Chihuahua"){
        console.log( "I love Chihuahuas, it’s my favorite dog breed");
    }else{
        console.log("I don't car, I prefer cats");
    }


// Exercice 3

    // Question 1 : prompting the user for a number and saving the value
    let z = prompt('Please, enter a number : ');

    // Question 2 : Checking the variable parity
    if(z%2 == 0){
        alert(`${z} is an even number`);
    }else{
        alert(`${z} is an odd number`);
    }

// Exercice 4

    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

    // Question 1 : checking the number of users that are online
    if(users.length == 0){
        console.log('No one is online .');
    }else if(users.length == 1){
        console.log(`${users[0]} is online .`);
    }else if(users.length == 2){
        console.log(`${users[0]} and ${users[1]} are online .`);
    }else{
        let numberOthersUsersOnLine = users.length - 2;
        console.log(`${users[0]}, ${users[1]} and ${numberOthersUsersOnLine} are online .`);
    }


