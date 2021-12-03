const express = require('express');
const fs = require('fs');
const app = express();
let data = null;
fs.readFile('./data.json', 'utf-8', (err, dataJSON) => {
  if (err) {
    process.exit(1);
  }
  data = JSON.parse(dataJSON);
});

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const { notes } = data;
  let notesArr = [];
  for (let note in notes) {
    notesArr.push(notes[note]);
  }
  res.status(200).json(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const { notes } = data;
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  if (notes[id]) {
    res.status(200).json(notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  const { content } = req.body;
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  data.notes[data.nextId] = { content, id: data.nextId };
  data.nextId++;
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error({ error: 'An unexpected error occurred.' });
      res.status(500).json({ error: 'An unexpected error occurred.' });
    } else {
      res.status(201).json(data.notes[data.nextId - 1]);
    }
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const { notes } = data;
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }

  if (notes[id]) {
    delete notes[id];
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).send();
      }
    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const { notes } = data;
  const { content } = req.body;
  const id = Number(req.params.id);
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });

  }
  if (notes[id]) {
    notes[id].content = content;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error({ error: 'An unexpected error occurred.' });
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(notes[id]);
      }

    });
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app listening on port 3000'));
