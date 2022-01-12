/* exported swapFront */

function swapFront(list) {
  if (!list.next) return list;
  const cur = list.next;
  const curNext = cur.next;
  cur.next = list;
  list.next = curNext;
  return cur;

}
