const map = (array, transform) => {
  let mappedArr = [];
  for (let el of array) {
    mappedArr.push(transform(el));
  }
  return mappedArr;
};
