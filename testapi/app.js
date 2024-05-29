
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var subscribeRouter = require('./routes/subscribe');
var viewRouter=require('./routes/example');
var deleteRouter=require('./routes/delete');
var updateRouter=require('./routes/puts')
// console.log("app loaded")


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/subscribe', subscribeRouter);
app.use('/example', viewRouter);
app.use('/delete',deleteRouter);
app.use('/put',updateRouter);
module.exports = app;
