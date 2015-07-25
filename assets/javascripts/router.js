import App from '../../es6/react_components/App'
import Backbone from 'backbone'
import DOM from './utilities/DOM'
import { Promise } from 'es6-promise'
import React from 'react'
import TweetAnalyzer from '../../es6/react_components/TweetAnalyzer'
import GeometricLoader from '../../es6/react_components/GeometricLoader'

class Router extends Backbone.Router {
  routes() {
    return {
      '': 'setupApp',
      'analyze': 'analyzeTweet'
    }
  }

  constructor(options) {
    super()
    ShouldITweetIt.on('analyzeTweet', (text) => this.analyzeTweet(text))
  }

  setupApp() {
    React.render(<App />, DOM.find('.app-container'));
  }

  analyzeTweet(text) {
    this.hideMainContainer()
  }

  hideMainContainer() {
    let mainContainer = DOM.find('.main-innerContainer')
    let main = DOM.find('main')
    main.addEventListener('transitionend', () => this.showLoader() )
    mainContainer.classList.add('is-hidden')
    main.classList.add('is-hidden')
  }

  showLoader() {
    React.render(<GeometricLoader width='80' height='80' />, DOM.find('.app-container'))
  }

  showTweetAnalyzer() {
    React.render(<TweetAnalyzer text={ text }/>, DOM.find('.main'));
  }
}

export default Router
