// Create a web server
// Create an API endpoint that accepts a POST request to /api/comments
// Create a web form that submits a POST request to /api/comments
// Create a web form that submits a DELETE request to /api/comments/:id
// Create a web form that submits a PUT request to /api/comments/:id

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

// Set up express app
var app = express();
var PORT = 3000;

// Set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Data
var comments = [
    {
        id: 1,
        name: 'John Doe'
    }
];
