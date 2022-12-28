// Exercice 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift() //removing Banana from the array.

fruits.sort(); //sorting array

fruits.push("Kiwi"); // adding Kiwi to the array.
console.log(fruits);

fruits.splice(0,1); // removing Apples from array.

// reversing of array
let changeValue;
changeValue = fruits[0];
fruits[0]=fruits[2];
fruits[2]=changeValue;
console.log(fruits);

// Exercice  2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);