// Exercice 1

    // Part I

        //  Question 1 and 2 : creation of infoAboutMe function
        function infoAboutMe(){
            console.log("My name's Abel N'gbandaman, I'm 22 and am into listenning music, playing football and checker. I'm also a big Messi's fan.");
        }

        // Question 3 : call of infoAboutMe
        infoAboutMe()

    // Part 2

        // Question 1 and 2 : creation of infoAboutPerson function
        function infoAboutPerson(personName, personAge, personFavoriteColor){
            console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`);
        }

        // Question 3 : call of infoAboutPerson
        infoAboutPerson("David", 45, "blue");
        infoAboutPerson("Josh", 12, "yellow");


// Exercice 2

    // Question 1, 2 and 3: creation of calculateTip function
    function calculateTip(){
        let amountOfTheBill = prompt('Hi, please enter the amount of the bill');
        let tip = 10;
        switch(amountOfTheBill){
            case (amountOfTheBill < 50):
                tip = 20;
                amountOfTheBill -= amountOfTheBill*(tip/100); 
                break;
            case (amountOfTheBill >= 50 && amountOfTheBill < 200) :
                tip = 20;
                amountOfTheBill -= amountOfTheBill*(tip/100); 
                break;
            default :
                // tip value is equal to 10 already
                amountOfTheBill -= amountOfTheBill*(tip/100);
                break;
        }
        console.log(`Tip amount : ${amountOfTheBill*(tip/100)}\nFinal bill : ${amountOfTheBill}`); // Question 4 : displaying amount of the bill
    }

    // Question 5 : call calculateTip function
    calculateTip();


// Exercice 3 

    // Question 1 : 
    function isDivisible(){
        
    }

