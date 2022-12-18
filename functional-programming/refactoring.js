// TASK 1
// Refactor tripleNums to use a for...of loop instead of a basic for. https://devdocs.io/javascript/statements/for...of

function tripleNums(nums) {
  const tripledArr = [];
  for (let num of nums) {
    tripledArr.push(num * 3);
  }
  return tripledArr;
}

// TASK 2
// Refactor shoutNames to use the higher order function, map, instead of the for loop. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function shoutNames(names) {
  // shoutNames capitalises all the names and returns them in a new array.
  return names.map((name) => name.toUpperCase());
}

// TASK 3
// Refactor isSweetEnough to use the higher order function, every. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function isSweetEnough(foodArray) {
  // isSweetEnough returns true if ALL foods are sweet.
  return foodArray.every((food) => food.flavour === "sweet");
}

// TASK 4
// Refactor getExcited to use a string method. Hint: Most of this code can be replaced with one method!

function getExcited(sentence) {
  // getExcited changes all full stops in a sentence to an exclamation mark!
  // const sentenceArray = sentence.split("");
  // for (let i = 0; i < sentenceArray.length; i++) {
  //   if (sentenceArray[i] === ".") {
  //     sentenceArray[i] = "!";
  //   }
  // }

  // return sentenceArray.join("");
  return sentence
    .split("")
    .map((el) => (el === "." ? "!" : el))
    .join("");
}

// TASK 5
// Refactor isShrekCharacter to use a higher order function and tidy up the code.

function isShrekCharacter(characters) {
  // isShrekCharacter receives an array of characters and *only* returns the characters from the Shrek franchise in a new array.
  return characters.filter((character) => character.movie.includes("Shrek"));
}

console.log(
  isShrekCharacter([
    { name: "Fiona", movie: "Shrek" },
    { name: "Fairy Godmother", movie: "Shrek 2" },
    { name: "Cookie", movie: "Shrek 4" },
    { name: "Puss In Boots", movie: "Shrek 2" },
    { name: "Han Solo", movie: "Star Wars: A New Hope" },
    { name: "Han Solo", movie: "Star Wars: A New Hope" },
  ])
);

// NOTE: Remember to remove any unused variables or console logs from the code. Refactoring is also about readability, ensure variables are clearly named!

// ---------- Do not change the code below this line --------------
module.exports = {
  isSweetEnough,
  shoutNames,
  isShrekCharacter,
  tripleNums,
  getExcited,
};
