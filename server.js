// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', (req, res) => res.send('Hello!'));

// db.sequelize.sync({ force: false }).then(function() {
    
//   });

/* get routes */
let userRoutes = require("./routes/user");
app.use(userRoutes);

  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });