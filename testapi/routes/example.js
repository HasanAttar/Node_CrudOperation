
var express=require('express');
var router=express.Router();

var viewed=require('../controller/example.js');


router.get('/',viewed.view);
router.get('/ed',viewed.viewED);

console.log('routs loaded')
module.exports=router;

