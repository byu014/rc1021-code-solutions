fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(response => console.log(response));

fetch('https://pokeapi.co/api/v2/pokemon/dialga')
  .then(response => response.json())
  .then(response => console.log(response));
