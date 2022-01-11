/* exported countValues */

function countValues(stack) {
  let count = 0;
  while (stack.peek() !== undefined) {
    count += 1;
    stack.pop();
  }
  return count;
}
