const express = require('express');

const app = express();
app.use('/w00t', (req, res, next) => {
  console.log('In the middleware!');
  res.send('<h1>Send command #1</h1>')
});
app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Send command #2</h1>')
});

app.listen(3000);
