const express = require('express');
const app = express();
const user_postRoute = express.Router();

// user_post model
let user_post = require('../models/user_post');
// const user_detailRoute = require('./user_detail.route');

// Add user_detail
user_postRoute.route('/creat').post((req, res, next) => {
  user_post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All user_details
user_postRoute.route('/').get((req, res) => {
  user_post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single user_detail
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

// Delete user_detail
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