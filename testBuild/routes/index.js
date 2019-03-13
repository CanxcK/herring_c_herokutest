var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connor', message: "This is your first Ex App" });
});

module.exports = router;
