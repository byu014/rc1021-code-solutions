let fs = require('fs');

if (process.argv.length >= 3) {
  fs.writeFile('note.txt', process.argv[2] + '\n');
}
