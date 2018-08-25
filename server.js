var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.listen(8085);
console.log('running on 8085')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());


var router = require('./app/routes')
// router(app);
router(app)
