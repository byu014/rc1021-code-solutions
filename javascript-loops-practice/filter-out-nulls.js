/* exported filterOutNulls */
function filterOutNulls(values) {
  let filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}

// define a function 'filterOutNulls' that accepts one parameter values
// assign an empty array literal to the variable filtered
// define a for loop that loops through the entirety of the values array
// check if value at current index of the values array is not null
// append the value to the array filtered if not null
// return filtered after for loop is done
