'use strict';

const React = require('react');
const ReactDom = require('react-dom');
const App = require('../lib/react/app');

module.exports = childrenNum => (deferred) => ReactDom.render(
  React.createElement(App, { childrenNum }),
  document.querySelector('.my-app'),
  () => { deferred.resolve() }
);
