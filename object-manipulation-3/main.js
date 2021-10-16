console.log('Lodash is loaded:', typeof _ !== 'undefined');

function draw(player, deck, cardsPerHand, maxPerson) {
  while (cardsPerHand > 0) {
    let card = 0;
    do {
      card = Math.floor((Math.random() * 52) + 1);
    } while (!deck[card]);
    player.hand.push(deck[card]);
    delete deck[card];
    cardsPerHand--;
  }
  let currentHand = player.hand[0].value + player.hand[1].value;
  if (currentHand > maxPerson.value) {
    maxPerson.name = player.name;
    maxPerson.value = currentHand;
    maxPerson.hand = player.hand;
  }

}

function play(players, cardsPerHand) {
  let suits = ['diamonds', 'spades', 'clubs', 'hearts'];
  let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  let values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

  let deck = {};
  let cardCount = 1;
  for (let suit of suits) {
    for (let i = 0; i < ranks.length; i++) {
      let rank = ranks[i];
      let value = values[i];
      deck[cardCount] = { suit, rank, value };
      cardCount++;
    }
  }

  let maxPerson = {
    value: 0,
    name: null,
    hand: []
  };
  for (let player of players) {
    draw(player, deck, cardsPerHand, maxPerson);
  }
  console.log(`${maxPerson.name} wins with a hand of ${maxPerson.hand[0].rank} and ${maxPerson.hand[1].rank} (${maxPerson.value})`);
}

let players = [
  {
    name: 'Bill',
    hand: []
  },
  {
    name: 'Jill',
    hand: []
  },
  {
    name: 'Gill',
    hand: []
  },
  {
    name: 'Grill',
    hand: []
  }
];

let cardsPerHand = 2;

play(players, cardsPerHand);
