var express = require('express');
var testCo = require('./controller/testController')

module.exports = function(app){
  var apiRoutes = express.Router();
  var testRoutes = express.Router();

apiRoutes.use('/test',testRoutes);
testRoutes.get('/create', testController.pushToDatabase())

app.use('/api', apiRoutes);
};
