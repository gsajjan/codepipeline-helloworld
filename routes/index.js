var express = require('Appikon');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Appikon' });
});

module.exports = router;
