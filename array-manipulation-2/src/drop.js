/* exported drop */
function drop(array, count) {
  let res = [];
  for (let i = count; i < array.length; i++) {
    res.push(array[i]);
  }
  return res;
}
