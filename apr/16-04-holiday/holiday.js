function isInRange(number, min, max){
    if ((number > min) && (number < max)){
        return true;
    } else {
        return false;
    }
}
console.log(`Task 1:`)
console.log(isInRange(2, 0, 5));
console.log(isInRange(10, 0, 5));
console.log(isInRange(100, 50, 500));
console.log(isInRange(-1, -50, 50));
console.log(isInRange(0, -50, 50));
// if the number is higher than min but smaller than max =true

function containsVowel(theString){
    if (theString.toLowerCase().includes("a","e","i","o","u","1")){
        return true;
    } else {
        return false;
    }
}
console.log('Task 2:')
console.log(containsVowel("table"))
console.log(containsVowel("bcdfg")); // false
console.log(containsVowel("a")); // true
console.log(containsVowel("aeiou")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("")); // false
console.log(containsVowel("Abc"));

// if (theString.includes("a","e","i","o","u"))

function containsNumber(numLet){
     return /\d/.test(numLet)
}
console.log('Task 3: Whats does this mean /\\d/.test')
console.log(containsNumber("1"))
console.log(containsNumber("abc"));
console.log(containsNumber("a2c"))
console.log(containsNumber("100px"))
console.log(containsNumber("100px"))
console.log(containsNumber("0"))
console.log(containsNumber("$23.00"))
console.log(containsNumber("T-shirts x2"))
// What does this mean?  /\d/.test
// check if numLet include typeof "number"


// iffirst letter strin[0] is uppercase = true

// compare the firstLetter string[0] with includes("A"-"Z") = true or false?

//  otherwise= we call the first letter in'toUppercase() and then we compare it to itself

function isFirstLetterUpperCase(firstLetteritation){
    if (typeof firstLetteritation !== "string" || firstLetteritation.length === 0) {
        return false;
    } else if (firstLetteritation[0].toUpperCase() === firstLetteritation[0]){
        return true;
    } else {
        return false
    }
}
console.log('Task 4:')
console.log(isFirstLetterUpperCase("hello"));
console.log(isFirstLetterUpperCase("Hello"));
console.log(isFirstLetterUpperCase("Bianca"));
console.log(isFirstLetterUpperCase("jim"));
console.log(isFirstLetterUpperCase(""));
console.log(isFirstLetterUpperCase("A"));


function cheaperThan(pricesArr, priceLimit){
    
    for (let i = 0; i < pricesArr.length; i++){
        if (pricesArr[i] < priceLimit){
            cheaperPrices.push(pricesArr[i])
        }
    } 
    return cheaperPrices;
  
}
let cheaperPrices = [];

// console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 20));
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 90));
console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0));
// console.log(cheaperThan([19.99, 29.87, 12.99, 5.00, 2.90, 100], 0));


function wordsThatEndWithIng(theWords) {
    for (let i = 0; i < theWords.length; i++){
        if (theWords[i].slice(-3) === "ing") {
            capchaWords.push(theWords[i])
        }
    } 
    return capchaWords;
}
let capchaWords = [];
console.log('Task 6:')
console.log(wordsThatEndWithIng(["walking", "ing"]));







function numbersDivisibleBy3(dividedNumbers){
    let dividedNumbersRecall = [];
    for (let i = 0; i < dividedNumbers.length; i++){
        if (dividedNumbers[i] % 3 === 0){
            dividedNumbersRecall.push(dividedNumbers[i])
            } 
        }
        return dividedNumbersRecall;
    }
    
 dividedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Task 7:')
console.log(numbersDivisibleBy3(dividedNumbers))




function onlyLongWords(theLongWords){
    let fiveOrMore = [];
    let splittedString = theLongWords.split(' ');
    for (let i = 0; i < splittedString.length; i++){
        if (splittedString[i].length >= 5){
            fiveOrMore.push(splittedString[i])
        }
    }
    return fiveOrMore;
}

let theLongWords = "Welcome to Wikipedia the free encyclopedia that anyone can edit";
console.log('Task 8:')
console.log(onlyLongWords(theLongWords));

/**
 * split the words
 * if string[i].length > 5
 * push string[i] to fiveOrMore
 */
myString = "hello denise"
console.log(myString[0].toUpperCase())

/**
 * Map function
 * The first letter of a string[i].toUpperCase
 * push the String to new variable
 */
function firstLetterUpperCase(inputArray){
    let outputArray = [];
    for (let i = 0; i < inputArray.length; i++){
        outputArray.push(inputArray[i][0].toUpperCase() + inputArray[i].substr(1))
    }
return outputArray;
}

let inputArray = ["table", "chair", "lamp", "pen"];
console.log(firstLetterUpperCase(inputArray));
