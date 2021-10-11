const student = {
  firstName: 'Bailey',
  lastName: 'Yu',
  age: 23
};

let fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: '2012'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle.color:', vehicle.color);
console.log('value of vehicle.isConvertible:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Mike',
  type: 'dog'
};

delete pet['name'];
delete pet.type;

console.log('value of pet:', pet);
