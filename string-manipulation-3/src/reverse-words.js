/* exported reverseWords */
function reverseWords(string) {
  let words = string.split(' ');
  for (let i = 0; i < words.length; i++) {
    let reverse = '';
    for (let j = words[i].length - 1; j >= 0; j--) {
      reverse += words[i][j];
    }
    words[i] = reverse;
  }
  return words.join(' ');
}

/* define function reverseWords with parameter string
  declare variable words, split the string by space into an array where
  every element is a word and assign it to words
  declare for loop that loops from 0 to end of the words array
  declare variable reverse and assign it an empty string
  declare a nested for loop that loops from end of each letter to the beginning of each word
  concatenate each letter to reverse
  replace the value at each index of words with reverse
  rejoin the words back into a string with a space and return that value
*/
