const reduce = (array, reducer, initialValue) => {
  let reduced = initialValue;
  for (let el of array) {
    if (initialValue === undefined) {
      initialValue = array[0];
    } else {
      initialValue = reducer(initialValue, el);
    }
  }
  return initialValue;
};
