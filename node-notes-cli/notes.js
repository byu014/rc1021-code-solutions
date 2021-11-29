const data = require('./data.json');
const fs = require('fs');

switch (process.argv[2]) {
  case 'read':
    for (let i = 0; i < parseInt(data.nextId); i++) {
      if (data.notes[i]) {
        console.log(`${i}: ${data.notes[i]}`);
      }
    }
    break;

  case 'create':
    process.argv[3] ? data.notes[data.nextId++] = process.argv[3] : (() => { console.log('Missing argument'); process.exit(1); })();
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
    break;

  case 'delete':
    if (data.notes[process.argv[3]]) {
      delete data.notes[process.argv[3]];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    } else {
      console.log('Entry does not exist');
    }
    break;

  case 'update':
    if (data.notes[process.argv[3]]) {
      process.argv[4] ? data.notes[process.argv[3]] = process.argv[4] : (() => { console.log('Missing argument'); process.exit(1); })();
      fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    } else {
      console.log('Entry does not exist');
    }
    break;

  default:
    break;
}
