let numClicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
let baseButtonClassName = $hotButton.className + ' ';

$hotButton.addEventListener('click', function (event) {
  $clickCount.textContent = ++numClicks;
  if (numClicks < 4) {
    $hotButton.className = baseButtonClassName + 'cold';
  } else if (numClicks < 7) {
    $hotButton.className = baseButtonClassName + 'cool';
  } else if (numClicks < 10) {
    $hotButton.className = baseButtonClassName + 'tepid';
  } else if (numClicks < 13) {
    $hotButton.className = baseButtonClassName + 'warm';
  } else if (numClicks < 16) {
    $hotButton.className = baseButtonClassName + 'hot';
  } else {
    $hotButton.className = baseButtonClassName + 'nuclear';
  }
});
