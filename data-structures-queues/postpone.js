/* exported postpone */

function postpone(queue) {
  const first = queue.dequeue();
  if (first !== undefined) {
    queue.enqueue(first);
  }
}
