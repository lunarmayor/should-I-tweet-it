import React from 'react'
import App from './react_components/App'
import Home from './react_components/Home'
import GeometricLoader from './react_components/GeometricLoader'
import TweetAnalyzer from './react_components/TweetAnalyzer'
import { Route, Router } from 'react-router'

let routes = (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="loading" component={GeometricLoader}/>
    <Route path="analyzing_tweet" component={TweetAnalyzer}/>
  </Route>
)

export default routes
