// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1
// function vowels(str) {
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   const vowels = str.toLowerCase().split('').filter(item => {
//     return checker.includes(item) ? true : false;
//   });
//   return vowels.length;
// }

// Solution 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
