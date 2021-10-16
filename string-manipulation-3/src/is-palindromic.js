/* exported isPalindromic */
function isPalindromic(string) {
  string = string.split(' ').join('');
  let reverse = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse === string;
}

/* define function isPalindromic with parameter string
  split string by space into an array where every element is a word
  rejoin the words with no spaces in between and assign the value to string
  declare variable reverse with a value of empty string
  declare for loop that loops from end of string to beginning
  concatenate each letter of the string to reverse
  compare reverse and string to see if they match and return that value
*/
