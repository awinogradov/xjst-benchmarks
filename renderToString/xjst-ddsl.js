'use strict';

const ddsl = require('xjst-ddsl');
const api = new ddsl.Engine();
let xd = {};

module.exports = (childrenNum, templates) => () => {
  api.compile(templates);
  api.exportApply(xd);
  xd.apply({
    block: 'app',
    content: [
      {
        block: 'header',
        childrenNum: childrenNum
      },
      {
        block: 'content',
        childrenNum: childrenNum
      },
      {
        block: 'footer',
        childrenNum: childrenNum
      }
    ]
  });
};
