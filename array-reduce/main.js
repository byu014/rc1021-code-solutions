const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, cur) => prev + cur);
console.log('sum:', sum);

const product = numbers.reduce((prev, cur) => prev * cur);
console.log('product:', product);

const balance = account.reduce((prev, cur) => cur.type === 'deposit' ? prev + cur.amount : prev - cur.amount, 0);
console.log('balance:', balance);

const composite = traits.reduce((prev, cur) => Object.assign(prev, cur), {});
console.log('composite:', composite);

/* global someFunction, reduce */
/* eslint no-undef: "error" */
console.log('reduce.js sum:', reduce(numbers, (prev, cur) => prev + cur));

console.log('reduce.js product:', reduce(numbers, (prev, cur) => prev * cur));

console.log('reduce.js balance:', reduce(account, (prev, cur) => cur.type === 'deposit' ? prev + cur.amount : prev - cur.amount, 0));

console.log('reduce.js composite:', reduce(traits, (prev, cur) => Object.assign(prev, cur), {}));
