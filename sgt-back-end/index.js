const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from grades;
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  let { score, name, course } = req.body;
  if (!name || !score || !course) {
    res.status(400).json({ error: 'The following parameters are required: score, name, course' });
  }
  score = Number(score);
  if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'score must be a positive integer between 0 and 100' });
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const queryParams = [name, course, score];
  db.query(sql, queryParams)
    .then(result => {
      res.status(200).send(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('express server running on port 3000'));
