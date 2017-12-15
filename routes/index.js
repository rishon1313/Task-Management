var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var io = require('socket.io')(http);
var Client = require('node-rest-client').Client;
var querystring = require('querystring');
var port = process.env.PORT || 3000;
var profanity = require('profanity-censor')
/* GET home page. */
taskList=[];

router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });
});
router.get('/task/assign', function(req, res, next) {

  res.render('index', { title: 'Express',taskList:taskList});
});

module.exports = router;
module.exports.taskList=taskList;