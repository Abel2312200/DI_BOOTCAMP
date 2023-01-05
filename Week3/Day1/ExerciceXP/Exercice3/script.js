// Question 2
document.querySelector('div').setAttribute("id","socialNetworkNavigation");

// Question 3
let newIl = document.createElement('li')  

let newTextNode = document.createTextNode('Logout');

newIl.appendChild(newTextNode);

document.querySelector('ul').appendChild(newIl);

// Bonus

let firstIl = document.querySelector('ul').firstElementChild;
let lastIl = document.querySelector('ul').lastElementChild;

console.log(`${firstIl.children[0].textContent}`);
console.log(`${lastIl.textContent}`);



