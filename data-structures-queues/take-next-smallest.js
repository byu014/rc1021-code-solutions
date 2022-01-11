/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  if (first === undefined) {
    return undefined;
  }
  // const second = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }

  while (first > queue.peek()) {
    queue.enqueue(first);
    first = queue.dequeue();
  }
  return first;
}
