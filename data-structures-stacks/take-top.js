/* exported takeTop */

function takeTop(stack) {
  if (stack.peek()) {
    return stack.pop();
  }
  return stack.peek();
}
