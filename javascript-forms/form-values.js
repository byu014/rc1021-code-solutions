const $form = document.forms[0];
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const messageData = {};
  for (let i = 0; i < $form.elements.length - 1; i++) {
    messageData[$form.elements[i].name] = $form.elements[i].value;
  }
  console.log('messageData:', messageData);
  event.target.reset();
});
