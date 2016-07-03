'use strict';

const React = require('react');
const reactXjst = require('react-xjst');

const ddsl = require('./assets/example.ddsl.js');

module.exports = reactXjst(ddsl, React);
