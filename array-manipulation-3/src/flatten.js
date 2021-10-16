/* exported flatten */
function flatten(array) {
  let flattened = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let element of item) {
        flattened.push(element);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}
