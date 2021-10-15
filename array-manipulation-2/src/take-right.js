/* exported takeRight */
function takeRight(array, count) {
  let res = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (count >= array.length) {
      break;
    }
    res.push(array[i]);
  }
  return res;
}
