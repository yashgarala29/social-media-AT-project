const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let user_post = new Schema({
   user_post_file:
   {
      type:String
      
   },
   user_id: {
      type: String
   },
   user_name:
   {
       type:String
   },
   user_post_date: {
      type: Date,default:Date.now
   },
   like: {
      type: Number
   },
   description:
   {
        type:String
   },
   user_post_file_name:
   {
       type:String,
    //    unique:String
   },
   user_post_file_type:
   {
       type:String
   },
   
   comments:[
      {
         comment_user_id:String,
         comment_text:String,
         comment_date:Date
      }
   ]
}, {
   collection: 'user_post'
})

module.exports = mongoose.model('user_post', user_post)