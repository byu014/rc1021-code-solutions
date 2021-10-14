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
