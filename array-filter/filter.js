
const filter = (array, predicate) => {
  const filteredArr = [];
  for (let el of array) {
    if (predicate(el)) {
      filteredArr.push(el);
    }
  }
  return filteredArr;
};
