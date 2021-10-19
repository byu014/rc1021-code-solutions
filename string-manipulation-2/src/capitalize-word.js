/* exported capitalizeWord */
function capitalizeWord(word) {
  let properStr = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    properStr += word[i].toLowerCase();
  }
  if (properStr === 'Javascript') {
    properStr = properStr.substring(0, 4) + 'S' + properStr.substring(5);
  }
  return properStr;
}

/* define a function 'capitalizeWord' with the parameter word
  assign the capitalized character at index 0 of word and assign it to
  the variable properStr
  declare a for loop that starts at 1 and loops to the end of the word
  lowercase the letter at each index of the string word and concatenate it to properStr
  return the value of properStr after the for loop ends */
