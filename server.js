'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// FCC testing purposes
fccTesting(app);

// Serve static files
app.use('/public', express.static(process.cwd() + '/public'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views/pug');  // Set the views directory

// Basic route for home page to render Pug template
app.route('/').get((req, res) => {
  res.render('index', { title: 'Metric/Imperial Converter', message: 'Successfully rendered the Pug template!' });
});

// Listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
