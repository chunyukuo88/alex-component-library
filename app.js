const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(blogRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>404 Errror: Oh nose, page Not ffound!</h1>')
});

app.listen(3000);
