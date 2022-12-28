// Exercice 1
let favoriteFood = "Puree de pomme";

let favoriteMeal = "Dinner";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

// Exercice 2

/* Part I */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let numberSeries = myWatchedSeries.length;

let myWatchedSeriesSentence = ["black mirror", "money heist","the big bang theory"];

console.log(`I watched ${numberSeries} series : ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`);
console.log(`I watched ${myWatchedSeriesSentence.length} series : ${myWatchedSeriesSentence[0]}, ${myWatchedSeriesSentence[1]} and ${myWatchedSeriesSentence[2]}`);

/* Part II */

myWatchedSeries[2] = "freinds";
myWatchedSeriesSentence[2] = "freinds";

myWatchedSeries.push("Chameless");

myWatchedSeriesSentence.unshift("Keep on positivity");

myWatchedSeries.shift();

console.log(myWatchedSeries[2]);

console.log(`I watched ${numberSeries} series : ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`);

// Exercice 3

let celsiusTemperature = 32;

let fahrenheitTemperature = (9/5) * celsiusTemperature + 32;

console.log(`${celsiusTemperature} °C is ${fahrenheitTemperature} .`);

// Exercice 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because 34 and 21 are numbers 
// Actual: 55

a = 2;


console.log(a+b) //second expression
// Prediction: It will output 23, because the new a's value is 2 and 2 and 21 are numbers
// Actual: 23


// Answer 3 : c is undefinied

// Answer 4 : It will output '345'


// Exercice 5
typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction: undefinied
// Actual: number

typeof("hello")
// Prediction: string
// Actual: boolean

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: error
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual:

"1" - "3"
// Prediction: error
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: error
// Actual: NaN

99 * "hello"
// Prediction: error
// Actual:  NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual : false


// Exercice 6

5 + "34"
// Prediction: It will output 534, because 5 is a number and "34" is a string
// Actual: 534

5 - "4"
// Prediction: It will output NaN, because "-" is used for numbers and "4" isn't one.
// Actual: 1

10 % 5
// Prediction: It will output 0, because 5 and 10 are numbers.
// Actual: 0

5 % 10
// Prediction: I will 10, because 5 and 10 are numbers.
// Actual: 5

"Java" + "Script"
// Prediction: I will output JavaScript, because "Java" and "Script" are strings.
// Actual: JavScript

" " + " "
// Prediction: It will output "  ", because " " and " " are strings.
// Actual:"  "

" " + 0
// Prediction: It will output " 0", because " " and "0" are strings.
// Actual: " 0"

true + true
// Prediction: It will output true, because true is boolean
// Actual: 2

true + false
// Prediction: It will output false, because true and false are booleans
// Actual: 1

false + true
// Prediction: It will output false, because true and false are booleans
// Actual: 1

false - true
// Prediction: I have no idea
// Actual: -1

!true
// Prediction: It will output false, because true is boolean.
// Actual: false

3 - 4
// Prediction: It will output -1, because 3 and 4 are numbers.
// Actual: -1

"Bob" - "bill"
// Prediction: I will output NaN, because "Bob" and "bill" aren't numbers.
// Actual: NaN
