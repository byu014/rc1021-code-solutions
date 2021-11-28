let fs = require('fs');
let i = 2;

let cb = (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  if (i < process.argv.length) {
    fs.readFile(process.argv[i++], 'utf8', cb);
  }
};

if (process.argv.length >= 3) {
  fs.readFile(process.argv[i++], 'utf8', cb);
} else {
  console.log('missing argument');
}
