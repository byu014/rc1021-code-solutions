/* exported defaults */
function defaults(target, source) {
  for (let key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

/* define function defaults with two parameters target and source
  declare for loop that loops through every key in source
  check if key is not in target
  if not then assign the target's key value property to source's key value property's value
*/
