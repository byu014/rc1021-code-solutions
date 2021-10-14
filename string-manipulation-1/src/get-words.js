/* exported getWords */
function getWords(string) {
  if (!string.length) {
    return [];
  }
  return string.split(' ');
}
