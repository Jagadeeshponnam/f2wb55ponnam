var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electricity', { title: 'Search Results electricity' });
});

module.exports = router;
