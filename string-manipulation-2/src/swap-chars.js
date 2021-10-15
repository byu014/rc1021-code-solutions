/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let splitStr = string.split('');
  let temp = splitStr[firstIndex];
  splitStr[firstIndex] = splitStr[secondIndex];
  splitStr[secondIndex] = temp;
  return splitStr.join('');
}
