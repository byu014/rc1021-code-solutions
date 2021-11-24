const operations = {};
operations.plus = require('./add');
operations.minus = require('./subtract');
operations.times = require('./multiply');
operations.over = require('./divide');
console.log('result:', operations[process.argv[3]](parseFloat(process.argv[2]), parseFloat(process.argv[4])));
