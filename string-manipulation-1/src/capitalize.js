/* exported capitalize */
function capitalize(word) {
  let properCase = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    properCase += word[i].toLowerCase();
  }
  return properCase;
}
