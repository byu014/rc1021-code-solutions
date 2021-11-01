/* exported calculator */
let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x ** 2;
  },
  sumAll: function (numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  },
  getAverage: function (numbers) {
    return this.sumAll(numbers) / numbers.length;
  }
};
