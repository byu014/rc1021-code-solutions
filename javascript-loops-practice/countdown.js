/* exported countdown */
function countdown(number) {
  let arr = [];
  for (let i = number; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
