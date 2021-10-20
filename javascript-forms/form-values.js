const $form = document.forms[0];
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const messageData = {};
  messageData[$form.elements.name.name] = $form.elements.name.value;
  messageData[$form.elements.email.name] = $form.elements.email.value;
  messageData[$form.elements.message.name] = $form.elements.message.value;
  console.log('messageData:', messageData);
  event.target.reset();
});
