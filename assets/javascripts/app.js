import { Router } from 'react-router';
import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import routes from './../../es6/routes'
import DOM from '@mmorrissey/dom'

DOM.ready( () => {
  let history = new BrowserHistory();
  let appContainer = DOM.find('.app-container');
  React.render(<Router history={history} children={routes}/>, appContainer);
})
