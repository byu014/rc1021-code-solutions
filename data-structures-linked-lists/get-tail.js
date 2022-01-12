/* exported getTail */

function getTail(list) {
  let cur = list;
  while (cur.next) {
    cur = cur.next;
  }
  return cur.data;
}
