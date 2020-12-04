const { application } = require('express');
var express = require('express');
const _class = require('../models/class');
const student = require('../models/student');
const teacher = require('../models/teacher');
var router = express.Router();
var Teacher = require("../models/teacher")

//GET Routes
router.get('/', function(req, res, next){
    res.send("Dashboard");
})
router.get('/classes', function(req, res, next){
    res.send("List of Classes");
})
router.get('/teachers', function(req, res, next){
  res.send("List of Teacher");
})

//POST Routes
router.post('/addteacher', function(req, res, next){
  Teacher.create(req.body).then((teacher)=> 
  {console.log("Teacher Added Successfully",teacher)
  req.statusCode= 200;
  res.setHeader('Content-type','application/json')
  res.json(teacher);
  },(err)=>{
    next(err).catch((err)=>next(err));
})  
})

router.post('/addclass', function(req, res, next){
    Class.create(req.body)
    .then((result) =>{
      console.log('Class has been Added', result);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    }, (err) => next(err))
    .catch((err)=>next(err));
});
router.post('/addstudent', function(req, res, next){
  Student.create(req.body)
  .then((student) =>{
    console.log('Student has been Added', student);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(student);
  }, (err) => next(err))
  .catch((err)=>next(err));
});


//PUT Routes
router.put('/class/:cid/teacher/:tid', function(req, res, next){
  Class.findOneAndUpdate({ _id: req.params.cid},{ teacher: req.params.tid}, function(error, results){
    if(error){
      return next(error);
    }
      res.json(results);
  });  
});



//Delete Routes
router.delete('/class/:id', function(req, res, next){
    res.send("Delete the class");
});
router.delete('/teacher/:id', function(req, res, next){
  Teacher.deleteOne({_id: req.params.id}, function(error,results){
    if(error){
      return next(error)
    }
    res.json(results);
  })
});

module.exports = router;