var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mendu:abc123@ds111441.mlab.com:11441/mytasklist_mendu', ['tasks']);

//get all tasks
router.get('/tasks', function(req, res, next) {
    //res.send('TASK API');
    db.tasks.find(function(err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);

    });
});

//get single tasks
module.exports = router;