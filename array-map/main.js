const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(num => num * 2);
console.log('doubled:', doubled);

const prices = numbers.map(num => `$${num.toFixed(2)}`);
console.log('prices:', prices);

const upperCased = languages.map(lang => lang.toUpperCase());
console.log('upperCased:', upperCased);

const firstLetters = languages.map(lang => lang[0]);
console.log('firstLetters:', firstLetters);

/* global someFunction, map */
/* eslint no-undef: "error" */

console.log('map.js doubled:', map(numbers, num => num * 2));

console.log('map.js prices:', map(numbers, num => `$${num.toFixed(2)}`));

console.log('map.js upperCased:', map(languages, lang => lang.toUpperCase()));

console.log('map.js firstLetters:', map(languages, lang => lang[0]));
