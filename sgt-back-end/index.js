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
    .catch(error => {
      console.error(error);
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
      res.status(201).send(result.rows[0]);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  let { gradeId } = req.params;
  let { score, name, course } = req.body;
  if (!name || !score || !course) {
    res.status(400).json({ error: 'The following parameters are required: score, name, course' });
  }
  score = Number(score);
  if (score < 0 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'score must be a positive integer between 0 and 100' });
  }
  gradeId = Number(gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer greater than 0' });
  }
  const sql = `
    update "grades"
    set "score" = $1, "name" = $2, "course" = $3
    where "gradeId" = $4
    returning *;
  `;
  const queryParams = [score, name, course, gradeId];
  db.query(sql, queryParams)
    .then(result => {
      if (!result.rows.length) {
        res.status(404).json({ error: 'grade does not exist' });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  let { gradeId } = req.params;
  gradeId = Number(gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer greater than 0' });
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const queryParams = [gradeId];
  db.query(sql, queryParams)
    .then(result => {
      if (!result.rows.length) {
        res.status(404).json({ error: 'grade does not exist' });
      } else {
        res.status(204).send();
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('express server running on port 3000'));
