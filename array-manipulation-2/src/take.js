/* exported take */
function take(array, count) {
  let res = [];
  for (let i = 0; i < count; i++) {
    if (count >= array.length) {
      break;
    }
    res.push(array[i]);
  }
  return res;
}

/* define function 'take' with two parameters array and count
  declare variable res with the value empty array literal
  declare for loop that loops count times
  check if count exceeds or equals the length of the array and if so, break out of for loop
  append current element to res
  return value of res after loop ends */
