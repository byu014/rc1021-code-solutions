/* exported removeTail */

function removeTail(list) {
  let cur = list;
  if (!cur.next) return;
  while (cur.next.next) {
    cur = cur.next;
  }
  cur.next = null;
}
