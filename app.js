const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin', adminRoutes);
app.use(blogRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './', 'views', 'error.html'));
});

app.listen(3000);
