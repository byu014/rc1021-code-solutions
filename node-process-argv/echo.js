let str = [];
for (let i = 2; i < process.argv.length; i++) {
  str.push(process.argv[i]);
}
console.log(str.join(' '));
