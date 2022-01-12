/* exported getLength */

function getLength(list) {
  let num = 0;
  let cur = list;
  while (cur) {
    num += 1;
    cur = cur.next;
  }
  return num;
}
