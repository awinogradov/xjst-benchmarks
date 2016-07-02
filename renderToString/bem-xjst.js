'use strict';

const bemxjst = require('bem-xjst');
const bemhtml = bemxjst.bemhtml;

module.exports = (childrenNum, templates) => () => {
  bemhtml.compile(templates).apply({
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
