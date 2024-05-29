var express = require('express');
var router = express.Router();

var sub = require('../controller/subscribe.js');

/* GET home page. */
router.get('/', sub.subs);

module.exports = router;
