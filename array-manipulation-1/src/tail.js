/* exported tail */
function tail(array) {
  let firstOmitted = [];
  for (let i = 1; i < array.length; i++) {
    firstOmitted.push(array[i]);
  }
  return firstOmitted;
}
