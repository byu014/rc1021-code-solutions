const $switch = document.querySelector('.switch');
const $container = document.querySelector('.container');
let isOn = true;
const defaultBoxShadow = $switch.style.boxShadow;

$switch.addEventListener('click', function () {
  if (isOn) {
    $container.style.backgroundColor = 'rgba(50,50,50)';
    $switch.style.boxShadow = '0 -15px 0px 15px rgba(10, 10, 10, 0.5)';
  } else {
    $container.style.backgroundColor = 'white';
    $switch.style.boxShadow = defaultBoxShadow;
  }
  isOn = !isOn;
});
