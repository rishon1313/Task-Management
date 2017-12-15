var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var list=require('./index');
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

router.get('/createTask',function (req,res,next) {
    res.render('tasks',{title:'Express',taskname:'',name:''});
});
router.post('/assign',function (req,res,next) {
    var name=req.body.name;
    var taskname=req.body.taskname;
    console.log(name);
    console.log(taskname);
    var l = {};
    l.name=name;
    l.taskname=taskname;
    list.taskList.push(l);
    console.log(list.taskList);
    res.render('index',{taskList:list.taskList});
});
module.exports = router;
