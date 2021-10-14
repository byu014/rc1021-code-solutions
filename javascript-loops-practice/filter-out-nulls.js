/* exported filterOutNulls */
function filterOutNulls(values) {
  let filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
