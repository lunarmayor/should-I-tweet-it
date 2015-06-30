import App from '../../es6/react_components/App'
import Backbone from 'backbone'
import DOM from './utilities/DOM'
import React from 'react'

class Router extends Backbone.Router {
  routes() {
    return {
      '': 'setupApp'
    }
  }

  constructor(options) {
    super()
  }

  setupApp() {
    React.render(<App />, DOM.find('.app-container'));
  }
}

export default Router
