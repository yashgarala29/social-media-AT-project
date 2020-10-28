const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let user_detail = new Schema({
   user_profile_photo:
   {
      type:String
      
   },
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
         followers_id:String
      }
   ],
   following:[
      {
         following_id:String
      }
   ]
}, {
   collection: 'user_detail'
})

module.exports = mongoose.model('user_detail', user_detail)