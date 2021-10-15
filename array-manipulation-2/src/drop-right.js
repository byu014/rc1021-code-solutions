/* exported dropRight */
function dropRight(array, count) {
  let res = [];
  for (let i = 0; i < array.length - count; i++) {
    res.push(array[i]);
  }
  return res;
}
