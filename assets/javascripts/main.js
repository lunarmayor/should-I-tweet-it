const React = require('react');
const App = require('../../react_components/App');

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready( () => {
  React.render(React.createElement(App), document.querySelector('.app-container'));
})

