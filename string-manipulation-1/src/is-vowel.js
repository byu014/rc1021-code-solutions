/* exported isVowel */
function isVowel(char) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  if (vowels[char.toLowerCase()]) {
    return true;
  }
  return false;
}

/* define function isVowel with one parameter char
  declare vowels assigned with an object with all vowels as property and true as values
  check if lowercased char is in vowels object
  if it is return true
  if not return false
*/
