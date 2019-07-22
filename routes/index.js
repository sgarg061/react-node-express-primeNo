var express = require('express');
var router = express.Router();

const { medianprime } = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({});
});

router.get('/medianprime', medianprime);

module.exports = router;
