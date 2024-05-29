var express =require('express');
var router=express.Router();

var deleted=require('../controller/delete');

router.get('/:id',deleted.delete);

module.exports=router;