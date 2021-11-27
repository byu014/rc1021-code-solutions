let fs = require('fs');

if (process.argv.length >= 3) {
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
} else {
  console.log('missing argument');
}
