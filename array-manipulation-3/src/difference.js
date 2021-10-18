/* exported difference */
function difference(first, second) {
  let symmetricDiff = {};
  let res = [];
  for (let word of first) {
    if (word in symmetricDiff) {
      delete symmetricDiff[word];
    } else {
      symmetricDiff[word] = true;
    }
  }

  for (let word of second) {
    if (word in symmetricDiff) {
      delete symmetricDiff[word];
    } else {
      symmetricDiff[word] = true;
    }
  }

  for (let word of first) {
    if (word in symmetricDiff) {
      res.push(word);
    }
  }
  for (let word of second) {
    if (word in symmetricDiff) {
      res.push(word);
    }
  }
  return res;
}
