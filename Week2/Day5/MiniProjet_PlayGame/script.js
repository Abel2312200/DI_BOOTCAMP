// Part I

/**
 * @author : Abel Ngbandaman
 * @description : by asking the user if they would like to play the game, it determine if the  user choosed the  right number.
 * @param : empty
 * @returns : void 
 */

function playTheGame(){
    let response = confirm('Voulez vous jouer ?');
    if(!response){
        alert('Pas de problème, Aurevoir');
    }else{
        let numberUser = prompt("S'il vous plait, entrez un nombre entre 0 et 10 : ");
        if(isNaN(numberUser)){
            do{
                alert("Désolé, c'est un nombre :");
                numberUser = prompt("S'il vous plait, réésayez : ");
            }while(isNaN(numberUser) === false);
        }else{
            let computerNumber = Math.round(Math.random() * 10);
            console.log(computerNumber)
            if(numberUser < 0 || numberUser > 10){
                alert("Ce nombre n'est pas valide, Aurevoir !");
            }else{
                compareNumbers(numberUser, computerNumber);
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
    let chance ;
    for (let chanceNumber = 1; chanceNumber <= 2 ; chanceNumber++) {

        if(userNumber == computerNumber){
            alert('GAGNANT');
            break;
        }else{
            if(userNumber > computerNumber){
                alert("Ton nombre est trop grand...");
            }else{
                alert("Ton nombre est trop petit..");
            }
            userNumber =  prompt('Entrez nouveau nombre : ');
        } 
        chance = chanceNumber + 1;
    }
    if(chance === 3) {
        alert('PERDU : Nombre de chances épuisés');
    }
    // do{
        
    // } while((userNumber !== computerNumber) && (chanceNumber <= 3));
}