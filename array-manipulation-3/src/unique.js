/* exported unique */
function unique(array) {
  let repeats = {};
  let uniqueArr = [];
  for (let word of array) {
    if (word in repeats) {
      continue;
    }
    repeats[word] = true;
    uniqueArr.push(word);
  }
  return uniqueArr;
}
