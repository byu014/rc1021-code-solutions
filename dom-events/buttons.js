function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

function mouseOver(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

const $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', mouseOver);

const $doubleClickButton = document.querySelector('.double-click-button');
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
