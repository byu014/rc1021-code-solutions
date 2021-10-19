function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));
console.log('greet:', greet('Beavis'));
console.log('getArea:', getArea(17, 42));
console.log('getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
