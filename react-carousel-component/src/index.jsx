import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imgs = [
  {
    id: 1,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
  },
  {
    id: 2,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png'
  },
  {
    id: 3,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png'
  },
  {
    id: 4,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png'
  },
  {
    id: 5,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png'
  },
  {
    id: 6,
    url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png'
  }
];

ReactDOM.render(
  <Carousel imgs={imgs} />,
  document.querySelector('#root')
);
