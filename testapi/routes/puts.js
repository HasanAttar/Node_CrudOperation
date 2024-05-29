var express=require('express');
var router =express.Router();


var puts=require('../controller/put')

router.get('/',puts.put)
module.exports=router;