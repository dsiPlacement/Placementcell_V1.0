var express = require('express');
var router = express.Router();
var Notice = require('../models/notice.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newNotice');
});

router.post('/',function(req, res, next){
  console.log(req.body);
  var notice = new Notice({
    title:req.body.title,
    content:req.body.content,
    author:'admin',
    date:new Date()
  })
  notice.save(function(err){
    if(err)
      console.log(err);
    else {
      console.log('Added new notice to the database');
      res.redirect('/all');
    }
  })
})

module.exports = router;
