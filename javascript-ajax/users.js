const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let response of xhr.response) {
    const $li = document.createElement('li');
    $li.textContent = response.name;
    $userList.append($li);
  }
});
