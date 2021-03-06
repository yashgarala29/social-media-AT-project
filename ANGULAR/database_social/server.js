const express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');
   
   const app1 = express();
var fs = require('fs'); 
   //  const DIR='.'
//file uplode
// var imgModel = require('./models/'); 
// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const user_detailRoute = require('./routes/user_detail.route')
const user_postRoute = require('./routes/user_post.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
// app.use('/uploads', express.static('public'));
app.use('/uploads', express.static('./uploads'));
app.use('/uploads/user_profile_photo', express.static('./uploads/user_profile_photo'));
app.use(express.static(path.join(__dirname, 'dist/social-media')));
app.use('/', express.static(path.join(__dirname, 'dist/social-media')));
app.use('/user_detail', user_detailRoute);
app.use('/user_post', user_postRoute);

// app.use('/uploads', express.static('public'));

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});