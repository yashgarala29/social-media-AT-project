
const express = require('express');
const app = express();

const user_detailRoute = express.Router();
var fs = require('fs');

var bodyParser = require('body-parser') 
const multer = require('multer');
let user_detail = require('../models/user_detail');

// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 
  
// user_detail model
// user_authen

// Set EJS as templating engine  
app.set("view engine", "ejs"); 

// ...........................................

var storage = multer.diskStorage({ 
   
}); 
var upload = multer({ storage: storage }); 
user_detailRoute.post('/add_follow',upload.single('file_uplode'),(req, res, next) => {
  console.log(req.body)
  var obj = {
    user:req.body.user,
    foll: req.body.foll
    }
});

// ..............................................

user_detailRoute.post('/user_authen',(req, res,next) => {
  // console.log(data.get('password_name'))
  var obj = {
    email:req.body.username_name,
   password: req.body.password_name
    }
 console.log(obj)
  user_detail.find(obj,(error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log(req.body.username_name)
      res.json(data)
    }
  })
})

// Add user_detail
user_detailRoute.route('/create').post((req, res, next) => {
  user_detail.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All user_details
user_detailRoute.route('/').get((req, res) => {
  user_detail.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single user_detail
user_detailRoute.route('/read/:id').get((req, res) => {
  user_detail.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update user_detail
user_detailRoute.route('/update/:id').put((req, res, next) => {


  user_detail.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete user_detail
user_detailRoute.route('/delete/:id').delete((req, res, next) => {
  user_detail.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = user_detailRoute;