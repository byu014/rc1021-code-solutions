/* exported omit */
function omit(source, keys) {
  let copy = { ...source };
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (copy[key]) {
      delete copy[key];
    }
  }
  return copy;
}
