/* exported pick */
function pick(source, keys) {
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (source[key] || source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

/* define function pick with two parameters source and keys
  declare variable newObj with the value empty object
  declare for loop that iterates from 0 to end of keys array
  declare variable key with the value of the current element
  check if value of key is a property of source or if value of key property is not undefined
  if it is then assign its value to newObj's value of key property
  return newObj when loop exits */
