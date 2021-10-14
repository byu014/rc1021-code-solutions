/* exported initial */
function initial(array) {
  let lastOmitted = [];
  for (let i = 0; i < array.length - 1; i++) {
    lastOmitted.push(array[i]);
  }
  return lastOmitted;
}
