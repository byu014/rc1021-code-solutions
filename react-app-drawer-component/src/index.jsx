import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const games = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild'
];

ReactDOM.render(
  <AppDrawer title={'Choose a Game'} itemsList={games}/>,
  document.querySelector('#root')
);
