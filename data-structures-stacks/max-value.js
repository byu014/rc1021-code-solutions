/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = stack.pop();
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;
}
