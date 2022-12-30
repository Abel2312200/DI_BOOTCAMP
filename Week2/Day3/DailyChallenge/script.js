       
       
        // first way : using repeat function of String
        for(let i=1; i<7; i++){
            console.log("*".repeat(i));
        }

        // second way : 
        let i = 1;
        while (i <= 6) {
          while (i>0) {
            console.log("*");
            i--;
          }
          i++;
        }
