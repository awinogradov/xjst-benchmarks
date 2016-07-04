'use strict';

const teleport = require('tlprt');
const join = require('path').join;

teleport({
  libName: 'example',
  techs: ['bemhtml.js'],
  platforms: ['desktop'],
  entities: ['templates'],
  levels: {
    desktop: [{
      path: join('lib', 'react-xjst')
    }]
  },
  exportPath: join('lib', 'react-xjst', 'assets')
});
