/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let cur = list;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = new LinkedList(value);
}
