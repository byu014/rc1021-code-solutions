/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (index > 0) {
    index--;
    queue.enqueue(queue.dequeue());
  }
  return queue.dequeue();
}
