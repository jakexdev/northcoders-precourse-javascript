// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
  return nums.filter((num) => num % 2 === 0);
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
  return array.filter((item) => item.length > len);
}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
  return array.slice(-n);
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
  let fillings = sandwich;
  fillings.shift();
  fillings.pop();
  return fillings;
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
  return array.
}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
  return [...arr1, ...arr2];
}

function flattenArrayByOne(arrayOfArrays) {
  /* given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  for example: [[1],[2],[[3,4]]] => [1,2,[3,4]]
  */
  return arrayOfArrays.flat();
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays
  return arrayOfArrays.every((array) => array.includes(item));
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
};

