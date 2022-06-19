var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of tags
router.get('/', function(req, res, next) {
  console.log("test");
  Item.find().distinct('tagListX').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
