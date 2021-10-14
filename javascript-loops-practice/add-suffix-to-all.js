/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let suffixedWords = [];
  for (let i = 0; i < words.length; i++) {
    suffixedWords.push(words[i] + suffix);
  }
  return suffixedWords;
}
