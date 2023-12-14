function len(string) {
  // Counter for the length of sentence
  let lenOfWord = string.length;
  return lenOfWord;
}

function countWords(string) {
  let numOfWords = 0;
  for (let char of string) {
    // Check if character is a space
    if (char === " ") {
      // If char is a space, increase the counter by 1
      numOfWords++;
    }
  }
  numOfWords += 1;
  return numOfWords;
}

function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  // This is the counter for the number of vowels
  let numOfVowels = 0;
  // Go through every letter in the string
  for (let letter of string) {
    if (vowels.includes(letter.toLowerCase())) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}

// Example Tests
console.log(countVowels("I love javascript."));
console.log(countWords("I love javascript."));
console.log(len("I love javascript."));
