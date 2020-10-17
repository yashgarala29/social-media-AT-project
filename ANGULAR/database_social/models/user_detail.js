const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let user_detail = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   password: {
      type: String
   },
   birthdate: {
      type: Date
   },
   followers:[
      {
         followers_id:String,
         followers_email:String
      }
   ],
   following:[
      {
         following_id:String,
         following_email:String
      }
   ]
}, {
   collection: 'user_detail'
})

module.exports = mongoose.model('user_detail', user_detail)