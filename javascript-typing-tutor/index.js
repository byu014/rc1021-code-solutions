const $h1 = document.querySelector('h1');

const string = 'grumpy wizards make toxic brew';

for (let char of string) {
  $h1.innerHTML += `<span>${char}</span>`;
}

const $spans = document.querySelectorAll('span');
const currentLetterBorderBottom = window.getComputedStyle($spans[0]).borderBottom;
let i = 0;

function onKeyDown(event) {
  if ($spans[i].innerText === event.key) {
    $spans[i].style.color = 'green';
    $spans[i].style.borderBottom = 'none';
    ++i < $spans.length ? $spans[i].style.borderBottom = currentLetterBorderBottom : document.removeEventListener('keydown', onKeyDown);
  } else {
    $spans[i].style.color = 'red';
    $spans[i].style.borderBottomColor = 'red';
  }
}

document.addEventListener('keydown', onKeyDown);
