/* exported capitalizeWords */
function capitalizeWords(string) {
  let splitStr = string.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i];
    splitStr[i] = word[0].toUpperCase();
    for (let j = 1; j < word.length; j++) {
      splitStr[i] += word[j].toLowerCase();
    }
  }
  return splitStr.join(' ');
}
