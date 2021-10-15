/* exported numVowels */
function numVowels(string) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  let total = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels[string[i].toLowerCase()]) {
      total++;
    }
  }
  return total;
}
