const express = require('express');
const app = express();
const user_detailRoute = express.Router();

// user_detail model
let user_detail = require('../models/user_detail');

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