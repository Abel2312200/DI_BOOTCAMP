       
       
        // first way : using repeat function of String
        for(let i=1; i<7; i++){
            console.log("*".repeat(i));
        }

        // second way : loop tutorial
        for(let i=0 ; i < 6; i++){
          let numberStar = ''; //  line initialisation 
          for(let j=0 ; j <= i; j++){
            numberStar +='*';
          }
          console.log(`${numberStar}\n`); // displaying of line
        }
