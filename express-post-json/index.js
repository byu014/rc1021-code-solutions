const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).send('Missing argument(s)');
    return;
  }
  grades[nextId] = { id: nextId, name, course, score };
  res.status(201).send(grades[nextId++]);
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app listening on port 3000'));
