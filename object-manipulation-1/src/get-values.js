/* exported getValues */
function getValues(object) {
  let values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
