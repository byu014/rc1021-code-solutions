/* exported union */
function union(first, second) {
  let union = {};
  let res = [];
  for (let word of first) {
    union[word] = true;
  }
  for (let word of second) {
    union[word] = true;
  }

  for (let word of first) {
    if (word in union) {
      res.push(word);
      delete union[word];
    }
  }
  for (let word of second) {
    if (word in union) {
      res.push(word);
      delete union[word];
    }
  }
  return res;
}
