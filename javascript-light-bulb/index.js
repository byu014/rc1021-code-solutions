const $switch = document.querySelector('.switch');
const $container = document.querySelector('.container');
let isOn = true;
const defaultBoxShadow = $switch.style.boxShadow;
const defaultSwitchColor = $switch.style.backgroundColor;
const defaultBGColor = $container.style.backgroundColor;

$switch.addEventListener('click', function () {
  if (isOn) {
    $container.style.backgroundColor = 'rgba(50,50,50)';
    $switch.style.backgroundColor = 'rgba(100,100,100)';
    $switch.style.boxShadow = '0 -15px 0px 15px rgba(10, 10, 10, 0.5)';
  } else {
    $container.style.backgroundColor = defaultBGColor;
    $switch.style.backgroundColor = defaultSwitchColor;
    $switch.style.boxShadow = defaultBoxShadow;
  }
  isOn = !isOn;
});
