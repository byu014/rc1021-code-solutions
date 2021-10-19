/* exported filterOutStrings */
function filterOutStrings(values) {
  let filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
