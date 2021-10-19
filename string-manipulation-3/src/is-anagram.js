/* exported isAnagram */
function isAnagram(firstString, secondString) {
  let letters = {};
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');
  for (let char of firstString) {
    if (!letters[char]) {
      letters[char] = 1;
    } else {
      letters[char] += 1;
    }
  }
  for (let char of secondString) {
    if (!(char in letters)) {
      return false;
    }
    letters[char] -= 1;
    if (letters[char] === 0) {
      delete letters[char];
    }
  }
  return !Object.keys(letters).length;
}
