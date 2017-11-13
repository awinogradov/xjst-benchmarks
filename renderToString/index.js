'use strict';

const fs = require('fs');
const join = require('path').join;

const CHILDREN_NUM = 5000;
const templates = fs.readFileSync(join(
  process.cwd(), 'renderToString', 'react-xjst', 'templates', 'templates.bemhtml.js'),
  'utf-8'
);

module.exports = {
  'react': require('./react')(CHILDREN_NUM),
  'preact': require('./preact')(CHILDREN_NUM),
  // 'react-xjst': require('./react-xjst')(CHILDREN_NUM),
  'bem-xjst': require('./bem-xjst')(CHILDREN_NUM, templates),
  // 'xjst-ddsl': require('./xjst-ddsl')(CHILDREN_NUM, templates)
};
