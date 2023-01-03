/**
 * @author : Abel Ngbandaman
 * @description :
 */
// Question 2 
let divAtt = document.getElementById('container'); // retrieving div
console.log(divAtt); // displaying div

let secondLiFirstUl = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[1]; // retrieving li's Pete
secondLiFirstUl.textContent = 'Richard'; // Changement of content from 'Pete' to 'Richard'

let firstLiFirstUl = document.getElementsByTagName('ul')[0].getElementsByTagName('li')[0]; // retrieving first <ul>
firstLiFirstUl.textContent = 'Ngbandaman'; //Changement of content to my name

let firstLiSecondUl = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[0]; // retrieving second <ul>
firstLiSecondUl.textContent = 'Ngbandaman';//Changement of content to my name

let secondLiSecondUl = document.getElementsByTagName('ul')[1].getElementsByTagName('li')[1];  // retrieving <li> containing 'Sarah'
secondLiSecondUl.remove(); // removing 'Sarah'

// Bonus
for(let i = 0; i < 2; i++){
    let ulAtt = document.getElementsByTagName('ul')[i];
    if(i === 0){ // adding classes of first ul
        ulAtt.classList.add('university');
        ulAtt.classList.add('attendance');
    }
    ulAtt.classList.add('student_list'); // adding student_list both ul
}

