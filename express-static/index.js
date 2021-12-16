const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, 'public');

const staticMW = express.static(publicPath);

app.use(staticMW);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
