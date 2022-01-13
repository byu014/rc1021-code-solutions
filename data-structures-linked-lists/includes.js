/* exported includes */

function includes(list, value) {
  let cur = list;
  if (!cur.next) return true;
  while (cur) {
    if (cur.data === value) return true;
    cur = cur.next;
  }
  return false;
}
