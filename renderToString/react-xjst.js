'use strict';

const React = require('react');
const ReactDomServer = require('react-dom/server');
const App = require('../lib/react-xjst/app');

module.exports = childrenNum => () => ReactDomServer.renderToString(React.createElement(App, { childrenNum }));
