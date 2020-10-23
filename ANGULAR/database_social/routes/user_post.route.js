const express = require('express');
const app = express();
var fs = require('fs'); 
var bodyParser = require('body-parser')
const user_postRoute = express.Router();
var path = require('path'); 
const multer = require('multer');
// user_post model
let user_post = require('../models/user_post');
const DIR='./uplods'
// Add user_post
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json()) 
  
// Set EJS as templating engine  
app.set("view engine", "ejs"); 

var storage = multer.diskStorage({ 
  destination: (req, file, cb) => { 
      cb(null, './uploads') 
  }, 
  filename: (req, file, cb) => { 
    console.log(file);
    cb(null,Date.now()+ '-' +file.originalname)
    // req.body.file_uplode.fieldname
      // cb(null,Date.now()+ '-' +file.fieldname ) 
  },
   
}); 
var upload = multer({ storage: storage }); 
// .route('/create')
user_postRoute.post('/create',upload.single('file_uplode'),(req, res, next) => {
  console.log(req.files, req.body)
  const url=req.protocol+'://'+req.get('host')
  console.log(req.body.file_uplode)
  var obj = new user_post({ 
    description: req.body.description, 
    user_id:req.body.user_id, 
    user_name:req.body.user_name,
    user_post_date:Date.now(),
    like:[],
    user_post_file_name:url+'/uploads/'+req.file.filename,
    // req.body.file_uplode.name,
    user_post_file_type:req.file.mimetype
         
    } );
  //   obj.save()
  user_post.create(obj, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All user_post
user_postRoute.route('/').get((req, res) => {
  user_post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single user_post
user_postRoute.route('/read/:id').get((req, res) => {
  user_post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// // Update user_detail
// user_detailRoute.route('/update/:id').put((req, res, next) => {
//   user_detail.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Data updated successfully')
//     }
//   })
// })

// Delete user_post
user_postRoute.route('/delete/:id').delete((req, res, next) => {
  user_post.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = user_postRoute;