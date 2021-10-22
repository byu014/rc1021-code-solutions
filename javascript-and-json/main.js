const books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'Random Book 1',
    author: 'Billy George'
  },
  {
    isbn: '978-3-16-148410-1',
    title: 'Random Book 2',
    author: 'Jack Smith'
  },
  {
    isbn: '978-3-16-148410-2',
    title: 'Random Book 3',
    author: 'Sam Wilson'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

const booksStringified = JSON.stringify(books);
console.log('typeof books after calling JSON.stringified:', typeof booksStringified);

const student = '{"id": 1,"name": "Bob Smith"}';
console.log('value of student:', student);
console.log('typeof student:', typeof student);

const studentJSON = JSON.parse(student);
console.log('value of studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
