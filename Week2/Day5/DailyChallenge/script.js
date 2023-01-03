
let bottlesNumber = prompt('Choose a number to start with : ');
let bottlesNumberToRemove = 1;
console.log(`We start the song at ${bottlesNumber} bottles`);
console.log(`Take_${bottlesNumberToRemove}_down, pass it around`);
console.log(`we have now ${bottlesNumber - bottlesNumberToRemove} bottles`);
do{
    bottlesNumberToRemove += 1;
    bottlesNumber -= bottlesNumberToRemove;
    console.log(`-> then, Take _${bottlesNumberToRemove}_ down, pass them around`);
    console.log(`we have now ${bottlesNumber - bottlesNumberToRemove} bottles`);
} while(bottlesNumber !== bottlesNumberToRemove);

alert(`${bottlesNumber - bottlesNumberToRemove} of bottle of beer on the wall`);