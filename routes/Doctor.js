const { application } = require('express');
var express = require('express');
const { response } = require('../app');
var router = express.Router();
var pateint = require("../models/pateint")


router.delete('/delete/:id/:lastvisit', function(req, res, next){
    pateint.deleteOne({ID: req.params.id, lastvisit: req.params.lastvisit}, function(error,results){
    if(error){
      return next(error)
    }
    res.json(results);
  })
});
router.post('/insert', function(req, res, next){
  var id = 2;
  var date = "999999";
  var pres = "2nd Data"
  pateint.insertMany({ID: id, lastvisit: date, prescription: pres}, function(error,results){
  if(error){
    return next(error)
  }
  res.json(results);
})
});

router.get('/', function(req, res, next){
    res.send("res")
}
  );
module.exports = router;