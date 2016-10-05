var mongoose = require('mongoose');

module.exports = mongoose.model('Notice',{
  title:String,
  content:String,
  author:String,
  date:Date
})
