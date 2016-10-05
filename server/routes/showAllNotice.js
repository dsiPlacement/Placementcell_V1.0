var express = require('express');
var router = express.Router();
var Notice = require('../models/notice.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Notice.find({}).sort({date:-1}).then(function(results){
    // if(err)
    //   console.log(err);
    console.log('results:'+results);
    res.render('allNotice',{notices:results});
  })
});


module.exports = router;
