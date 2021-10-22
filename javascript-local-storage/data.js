/* exported todos */

var todos = [];
let localStorage = window.localStorage;
let previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', function () {
  let todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
