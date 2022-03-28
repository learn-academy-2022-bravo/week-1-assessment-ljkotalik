// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The answer is 10 becasue .length is looking for the number of characters which includes the space


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the answer is o because it is looking for the index of 4, so you count the characters starting from 0


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
//const index = 2
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: the answer is Ruby because it is asking for the index of 1, so when you count each word (you count the words not letters because each word is in "") starting from 0, Ruby is in position 1


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: .toUpperCase can only be used on strings. In order for you to use it with an array, you would need to index which string you wanted to capitalize 


// --------------------5) What will this log?

//const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: The answer is number. I think the reason that this is the answer is because .length is technically asking for the length of the array, however, typeof turned the expected answer of 3 into the word number because 3 is a number.
