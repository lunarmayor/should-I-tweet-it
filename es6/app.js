import express from 'express'
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'
const app = express();

// view engine
app.use(express.static('dist'))
  .set('view engine', 'jade')
  .set('views', 'views');

// routes
app.get('/', (req, res) => {
  let location = new Location(req.path, req.query);

  Router.run(routes, location, (err, initialState, transition) => {
    let element = React.createElement(Router, initialState)
    let html = React.renderToString(element)
    res.render('index.jade', {
      app: html,
    });
  })
})

// server
app.listen((process.env.PORT || 5000), () => {
  console.log('successfully started :)');
});

