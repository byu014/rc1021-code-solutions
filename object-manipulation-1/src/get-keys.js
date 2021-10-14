/* exported getKeys */
function getKeys(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}
