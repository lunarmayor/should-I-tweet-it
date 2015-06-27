const express = require('express');
const app = express();

require('node-jsx').install()
const React = require('react')
const ReactApp = require('./react_components/App')

// view engine
app.use(express.static('dist'))
  .set('view engine', 'jade')
  .set('views', 'views');

// routes
app.get('/', (req, res) => {
  res.render('index.jade', {
    app: React.renderToString(React.createElement(ReactApp)),
  });
})

// server
app.listen(5000, () => {
  console.log('successfully started :)');
});

