/* exported zip */
function zip(first, second) {
  let i = 0;
  let zipped = [];
  while (i < first.length && i < second.length) {
    zipped.push([first[i], second[i]]);
    i++;
  }
  return zipped;
}
