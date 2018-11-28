var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var list=require('./index');
var Task = require('../models/Task');
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.get('/createTask',function (req,res,next) {
    res.render('tasks',{title:'Express',taskDesc:'',assignee:''});
});
router.post('/assign',function (req,res,next) {

    var task = new Task(
        {
             assignee:req.body.assignee,
             taskDesc:req.body.taskDesc
        }
    );

    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
       // res.send('Task Created successfully')
    })

});


module.exports = router;
