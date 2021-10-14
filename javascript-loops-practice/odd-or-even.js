/* exported oddOrEven */
function oddOrEven(numbers) {
  let parityArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      parityArr.push('odd');
    } else {
      parityArr.push('even');
    }
  }
  return parityArr;
}
