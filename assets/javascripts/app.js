import Backbone from 'backbone'
import Router from './Router'
import Ready from './utilities/Ready'

let ShouldITweetIt = {
  start: function() {
    new Router();
    Backbone.history.start({ pushState: true })
  }
}

Ready( () => { ShouldITweetIt.start() })
