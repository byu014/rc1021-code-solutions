let num1 = 5;
let num2 = 10;
let num3 = 7;

let maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

let strArr = ['Mermaid Man', 'Barnacle Boy', 'Static Shock', 'Superman'];
let randomNumber = Math.random() * strArr.length;
let randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
let randomHero = strArr[randomIndex];
console.log('value of randomHero:', randomHero);

let library = [
  {
    title: 'Captain Underpants',
    author: 'Dav Pilkey'
  },
  {
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    title: 'Calvin and Hobbes',
    author: 'Bill Watterson'
  }
];

let lastBook = library.pop();
console.log('value of lastBook:', lastBook);
let firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

let fullName = 'Bailey Yu';
let firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
let firstName = firstAndLastName[0];
let sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
