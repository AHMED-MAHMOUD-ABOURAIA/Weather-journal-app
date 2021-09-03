/* eslint-disable no-undef */
// Setup empty JS object to act as endpoint for all routes
// const projectData = {};

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

// Setup Server
const port = 3000;
app.listen(port,() =>{console.log(`listening on port ${port}`)});

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route