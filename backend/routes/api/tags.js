var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of tags
router.get('/', function(req, res, next) {
  Item.find().distincts('tagsList').then(function(tags){
    if (tags.length === 0) {
      console.log("Warning: No tags found");
    }
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
