// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost/codingdivadb';
// Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   db.close();
// });
try{
  mongoose.connect(url);
  console.log("Connected to mongodb");
}
catch(e){
  console.log("Could not connect to db "+e);
  process.exit(1);
}


// Setting up an Express app
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
var corsOptions = {
  origin: 'http://localhost:8080/',
  optionsSuccessStatus: 200 
}
app.options('*', cors());  // enable pre-flight
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello!'));

// db.sequelize.sync({ force: false }).then(function() {
    
//   });

/* get routes */
let userRoutes = require("./routes/user");
app.use(userRoutes);

  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });