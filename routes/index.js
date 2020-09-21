var express = require('Appikon');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Appikon Project Demo' });
});

module.exports = router;
