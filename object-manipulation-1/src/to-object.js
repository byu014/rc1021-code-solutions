/* exported toObject */
function toObject(keyValuePair) {
  let key = keyValuePair[0];
  let value = keyValuePair[1];
  let object = {};
  object[key] = value;
  return object;
}
