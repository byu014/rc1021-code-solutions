const $openButton = document.querySelector('.open');
const $modalBG = document.querySelector('.modal-bg');
const $noButton = document.querySelector('.close');

$openButton.addEventListener('click', function () {
  $modalBG.style.display = 'flex';
});

$noButton.addEventListener('click', function () {
  $modalBG.style.display = 'none';
});
