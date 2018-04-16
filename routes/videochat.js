const express = require('express');
const router = new express.Router();

router.get('/', function(req, res, next) {
  res.render('videochat', {title: 'Video Chat'});
});

module.exports = router;
