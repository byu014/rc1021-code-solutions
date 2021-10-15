/* exported invert */
function invert(source) {
  let obj = {};
  for (let key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
