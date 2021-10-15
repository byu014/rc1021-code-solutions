/* exported ransomCase */
function ransomCase(string) {
  let ransomStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      ransomStr += string[i].toUpperCase();
    } else {
      ransomStr += string[i].toLowerCase();
    }
  }
  return ransomStr;
}
/* define a function 'ransomCase' with the parameter string
  declare a variable ransomStr assigned with the value of empty string
  declare a for loop that loops from 0 to the end of the string
  check the parity of the i
  if i is odd, uppercase the character at the current index and concatenate it to ransomStr
  if i is even, lowercase the character at the current index and concatenate it to ransomStr
  return the value of ransomStr after exiting the for loop */
