// Question 1
    let sentence = "The movie is not that bad for me, I like it";
    let split_sentence = sentence.split(" "); //split_sentence = [ "The","movie","is","not","that","bad","I","like","it"]

// Question 2
    let indexNot = split_sentence.indexOf('not') // researching index of "not" in split_sentece array
    let wordNot = split_sentence[indexNot];     
    
// Question 3
    let indexBad = split_sentence.indexOf('bad') // researching index of "bad" in split_sentece array
    let wordBad = split_sentence[indexBad];

// Question 4
    if(indexNot<indexBad){
        sentence = sentence.replace('not that bad','good'); // replace 'not that bad' by 'good'
        console.log(sentence); // displaying the sentence modified
    } else{
        console.log(sentence); // displaying the original sentence
    }
