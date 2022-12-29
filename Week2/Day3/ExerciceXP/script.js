// Exercice 1

const people = ["Greg", "Mary", "Devon", "James"];

    // Part I

        // Question 1 : removing of "Greg" from people array
        people.shift();

        // Question 2 : replacing of "James" to "Jason"
        people.splice(2,1,'Jason');

        // Question 3 : adding my name to the end of people array
        people.push("Ngbandaman");

        // Question 4 : displaying Mary's index
        people.indexOf("Mary");

        // Question 5 : people copy (without Mary and my name)
        let copyPeople = people.slice(1,3);

        // Question 6 : code giving the index of 'Foo'
        let fooIndex = people.indexOf('Foo'); // It returns -1 because Foo  isn't an element of people array

        // Question 7 : creation of last variable
        let last = people[people.length-1];
    
    // Part II

        // Question 1 : displaying of people's array elements
        for(let person of people){
            console.log(person+"\n");
        }

        // Question 2 : iteration of people array and exiting after "Jason"
        for(let person of people){
            console.log(person+"\n");
            if(person==="Jason"){
                break; // out to array
            }
        }


// Exercice 2

        // Question 1 : array creation of  my five favorite colors
        const colors = ["white","black","blue","yellow","pink"];

        // Question 2 : displaying array values like that "My #1 choice is blue"
        for(let color of colors){
            console.log(`My #${colors.indexOf(color)+1} is ${color} \n`);
        }

        // Question 3 : displaying array values like that "My 1st choice is blue"
        for(let color of colors){
            switch(colors.indexOf(color)){
                case 0:
                    console.log(`My ${colors.indexOf(color)+1}st is ${color} \n`);
                    continue;
                case 1:
                    console.log(`My ${colors.indexOf(color)+1}nd is ${color} \n`);
                    continue;
                case 2:
                    console.log(`My ${colors.indexOf(color)+1}rd is ${color} \n`);
                    continue;
                default:
                    console.log(`My ${colors.indexOf(color)+1}th is ${color} \n`);          
            }
        }

