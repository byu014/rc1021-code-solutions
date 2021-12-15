import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const games = [
  { id: 1, name: 'The Legend of Zelda' },
  { id: 2, name: 'A Link to the Past' },
  { id: 3, name: 'Ocarina of Time' },
  { id: 4, name: 'The Wind Waker' },
  { id: 5, name: 'Breath of the Wild' }
];

ReactDOM.render(
  <AppDrawer title={'Choose a Game'} itemsList={games}/>,
  document.querySelector('#root')
);
