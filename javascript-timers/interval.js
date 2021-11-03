const $h1 = document.querySelector('h1');
let countdown = setInterval(function () {
  $h1.textContent = parseInt($h1.textContent) - 1;
  if ($h1.textContent === '0') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdown);
  }
}, 1000);
