/* exported intersection */
function intersection(first, second) {
  let intersection = {};
  let res = [];

  for (let word of first) {
    intersection[word] = true;
  }

  for (let word of second) {
    if (word in intersection) {
      delete intersection[word];
    }
  }

  for (let word of first) {
    if (!(word in intersection)) {
      res.push(word);
    }
  }
  return res;
}
