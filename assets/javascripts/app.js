import Backbone from 'backbone'
import _ from 'underscore'
import Router from './Router'
import Ready from './utilities/Ready'
import extend from './utilities/extend'

window.ShouldITweetIt = {
  start: function() {
    new Router();
    Backbone.history.start({ pushState: true })
  }
}

_.extend(ShouldITweetIt, Backbone.Events)

Ready( () => { ShouldITweetIt.start() })
