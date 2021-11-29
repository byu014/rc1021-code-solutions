let fs = require('fs');

if (process.argv.length >= 4) {
  fs.readFile(process.argv[2], 'utf8', data => {

    fs.writeFile(process.argv[3], data);
  });
}
