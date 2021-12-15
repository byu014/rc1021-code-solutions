import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedInput from './validated-input';

const specialChars = new Set(
  [
    '!',
    '@',
    '#',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')'
  ]
);

ReactDOM.render(
  <ValidatedInput specialChars={specialChars}/>,
  document.querySelector('#root')
);
