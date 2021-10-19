/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(num) {
  if (num < 5) {
    return true;
  }
  return false;
}

function isEven(num) {
  return !(num % 2);
}

function startsWithJ(str) {
  if (str[0] === 'J') {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'acid';
  }
  if (pH > 7 && pH <= 14) {
    return 'base';
  }
  if (pH === 7) {
    return 'neutral';
  }
  return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  }
  if (name === 'dot') {
    return 'I\'m cute~';
  }
  return 'Goodnight everybody!';
}
