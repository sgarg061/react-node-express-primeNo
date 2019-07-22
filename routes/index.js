var express = require('express');
var router = express.Router();

const { medianprime } = require('../controllers');

router.get('/medianprime', medianprime);

module.exports = router;
