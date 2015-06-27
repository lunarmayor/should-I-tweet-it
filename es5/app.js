'use strict';

var express = require('express');
var app = express();

require('node-jsx').install();
var React = require('react');
var ReactApp = require('./react_components/App');

// view engine
app.use(express['static']('dist')).set('view engine', 'jade').set('views', 'views');

// routes
app.get('/', function (req, res) {
  res.render('index.jade', {
    app: React.renderToString(React.createElement(ReactApp))
  });
});

// server
app.listen(5000, function () {
  console.log('successfully started :)');
});