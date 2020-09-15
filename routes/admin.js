const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-entry', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'addEntry.html'));
});

router.post('/add-entry', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});


module.exports = router;
