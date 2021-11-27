let fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
