const express = require('express');
const app = express();

app.use((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('<strong>Hello, World!</strong>');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app listening on port 3000'));
