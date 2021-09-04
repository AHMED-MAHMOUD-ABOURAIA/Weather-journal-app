/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */

//Here we are configuring express to use body-parser as middle-ware.
/* Middleware*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));
app.use(express.json());
// Setup Server
const port = 3000;
app.listen(port,() =>{console.log(`listening on port ${port}`)});

// Initialize all route with a callback function

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Post Route
app.post('/api', addData)

function addData(request,response){
  const temp = request.body.main.temp;
  const newEntry = {
    temp: temp,
  }
  projectData = newEntry;
}


//Get Route
app.get("/all", sendData);

function sendData(req, res) {
  res.send(projectData)
  console.log(projectData)
}
