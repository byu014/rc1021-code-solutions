/* exported compact */
function compact(array) {
  let filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}
