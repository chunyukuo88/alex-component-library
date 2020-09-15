const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Nice jerb, you visited my blog.</h1>');
});

module.exports = router;
