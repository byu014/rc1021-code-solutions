const takeAChance = require('./take-a-chance');

let chance = takeAChance('Bailey')
  .then(value => console.log(value))
  .catch(error => console.error(error.message));
