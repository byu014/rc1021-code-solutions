/* exported chunk */
function chunk(array, size) {
  let i = 0;
  let res = [];
  let subArr = [];
  while (i < array.length) {
    if (subArr.length === size) {
      res.push(subArr);
      subArr = [];
    }
    subArr.push(array[i]);
    i++;
  }
  if (subArr.length > 0) {
    res.push(subArr);
  }
  return res;
}

/* define function chunk with two parameters array and size
  declare three variables i, res, subArr with values 0, empty array, and empty array respectively
  declare while loop that iterates while i is less than the length of array
  check if length of subArr is strictly equal to size
  if it is then append subArr into res and assign an empty array to subArr
  push the current element into subArr
  increment the value of i
  once loop is done check if subArr contains anything
  if it does append subArr to res
  return the value of res
*/
