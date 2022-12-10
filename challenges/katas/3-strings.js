// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getLength(str) {
  // return the length of the passed string
  return str.length;
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them
  return `${firstName} ${lastName}`;
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
  return str[0].toUpperCase() + str.slice(1);
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
  return SENTENCE[0] + SENTENCE.slice(1).toLowerCase();
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  if (str.length % 2 === 0) {
    // return str.slice(str.length / 2 - 1, str.length / 2 + 1);
    return str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

console.log(getMiddle("peep"));

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
  const wordsArr = words.split(" ");
  return wordsArr[wordsArr.length - 1];
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")
  return words.split(" ").join("-");
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
  return words
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

function passwordValidation(password) {
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/
  const characterArray = password.toLowerCase().split("");
  const lastCharacter = characterArray[characterArray.length - 1];

  return characterArray.includes("n") &&
    characterArray.includes("c") &&
    lastCharacter == 1
    ? "valid"
    : "invalid";
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};
