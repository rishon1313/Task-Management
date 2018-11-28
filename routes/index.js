var express = require('express');
var router = express.Router();
var http = require('http').Server(router);
var Task = require('../models/Task');
var io = require('socket.io')(http);
var Client = require('node-rest-client').Client;
var querystring = require('querystring');
var port = process.env.PORT || 3000;
var profanity = require('profanity-censor')
/* GET home page. */
taskList=[];

router.get('/', function(req, res, next) {
        Task.find(function (err,allTasks) {
        if(err)
            console.log('Unable to load items');
        console.log(allTasks)

        res.render('index', { title: 'Express',taskList:allTasks});
    });

  //  res.render('index', { title: 'Express' });
});
router.get('/task/assign', function(req, res, next) {

    Task.find(function (err,allTasks) {
        if(err)
            console.log('Unable to load items');
        console.log(allTasks)
        res.render('index', { title: 'Express',taskList:allTasks});
    });
});

module.exports = router;
module.exports.taskList=taskList;