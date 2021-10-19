/* exported truncate */
function truncate(length, str) {
  return str.slice(0, length) + '...';
}
