// Part I

/**
 * @author : Abel Ngbandaman
 * @description : by asking the user if they would like to play the game, it determine if the  user choosed the  right number.
 * @param : empty
 * @returns : void 
 */

function playTheGame(){
    let response = confirm('Do you wanna play ?');
    if(!response){
        alert('No problem, Goodbye');
    }else{
        let numberUser = prompt('Please, enter a number : ');
        if(isNaN(numberUser)){
            do{
                alert('Sorry, Not a number, Goodbye');
                numberUser = prompt('Please, enter a number');
            }while(isNaN(numberUser));
        }else{
            if(numberUser < 0 || numberUser > 10){
                alert("It's not a good number, Goodbye");
            }else{
                let computerNumber = Math.round(Math.random(11));
            }
        }
    }
}



/**
 * @author : Abel Ngbandaman
 * @description :  to check if the user's number is the same as the computer's number
 * @param : empty
 * @returns : void
 */

function compareNumbers(userNumber,computerNumber) {
    let chanceNumber =  1;
    do{
        if(userNumber === computerNumber){
            alert('WINNER');
            break;
        }else{
            if(userNumber > computerNumber){
                alert("Your number is bigger then the computer’s, guess again");
                userNumber =  prompt('Try again, enter new number');
            }else{
                alert("Your number is smaller then the computer’s, guess again");
                userNumber =  prompt('Try again, enter new number');
            }
        }
    } while((userNumber === computerNumber) && (chanceNumber < 3));

    if(chanceNumber == 3){
        alert('out of chances');
    }
}