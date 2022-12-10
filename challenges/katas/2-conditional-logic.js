// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
  return left === right;
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal
  return left !== right;
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
  return year > 1959 && year < 1970;
}

function isEvenLength(string) {
  // return true if string has an even length
  return string.length % 2 === 0;
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
  return left.toLowerCase() === right.toLowerCase();
}

// ---------- Do not change the code below this line --------------
module.exports = {
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
};
