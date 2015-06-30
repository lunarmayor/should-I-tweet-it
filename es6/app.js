import express from 'express'
import React from 'react'
import App from './react_components/App'
const app = express();

// view engine
app.use(express.static('dist'))
  .set('view engine', 'jade')
  .set('views', 'views');

// routes
app.get('/', (req, res) => {
  res.render('index.jade', {
    app: React.renderToString(React.createElement(App)),
  });
})

// server
app.listen(5000, () => {
  console.log('successfully started :)');
});

