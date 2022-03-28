// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// // Set one:
//  const fruit1 = "apple"
//  const fruit2 = "banana"

// // // Set two:
//  const fruit3 = "cherry"
//  const fruit4 = "kiwi"

// const bigFruit = (string1, string2) => {
//     if(string1.length > string2.length) {
//         return string1
//     } else if(string1.length < string2.length) {
//         return string2
//     } else {
//         return "oops try again"
//     }
// }

//  console.log(bigFruit(fruit1, fruit2))
// //output= banana
// console.log(bigFruit(fruit3, fruit4))




// use consitional statement to compare length of variable
// use.length
// return string with more characters in it
// Invoke function and pass variables as an argument











// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212
// Declared a varibale that will group all the temps
// let allTemp = (temp) => {
// use conditional statments to compare. use strictly equals for the at boiling point
//    if(temp === 212) {
    // if the temp strictly equals 212 then return is at boiling point
//        return `${temp} is at boiling point`
// use an else if statment for when the temp is less than 212 and if it is, return the temp and say it is below boiling point
//    } else  if(temp < 212){
//        return `${temp} is below boiling point`
// use else as a catch all for anything else and return is above boilin point
//    }  else {
//        return `${temp} is above boiling point`
//   } 
// }
// finally, invoke the functions
// console.log(allTemp(temp1))
// console.log(allTemp(temp2))
// console.log(allTemp(temp3))









// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
//create a function named allNumbers 
// use concatenation to add the two arrays
// let allNumbers = myNumbers1.concat(myNumbers2)
// invoke the function with .length to get the length of the new array
// console.log(allNumbers.length)











// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ovarB"

// const currentCohort = "Bravo 2022"
// Declare a variable to split the string and use .split
// let cohortSplit = currentCohort.split("")
// Declare a variable to reverse the new split string using .reverse
// let cohortReverse = cohortSplit.reverse()
// Declare a new variable to join the reversed string using .join
// let cohortJoin = cohortReverse.join("")
// invoke the functions
// console.log(cohortSplit)
// console.log(cohortReverse)
// console.log(cohortJoin)















// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]
// Create a for-loop that loops through until the end of the array length
// for(let i =0; i < myArray.length; i++){
// use modulo to determine which numbers are odd and even
// if(myArray[i] % 2 !== 0){
// console.log(`${myArray[i]} odd`);
//   } else{
    //invoke the fuction
//       console.log(`${myArray[i]} even`)
//   }
// } 











// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// // Set one:
// const number1 = 58
// const number2 = 100
// // // Set two:
//  const number3 = 27
//  const number4 = 24

// Declare a variable for that will include all numbers
// const bigNumbers = (num1, num2) => {
    //use conditional statements to compare and figure out which numbers are smaller. If number2 is greater than number1 then subtract number1 from number2
//     if( num2 > num1){
//         return num2 - num1;
// use else as a catch all and subtra=ct number 2 from number1
//     } else {
//         return num1 - num2; 
//     }
// }
// invoke the functions
// console.log(bigNumbers(number1, number2))
// console.log(bigNumbers(number3, number4))


