'use strict';

const CHILDREN_NUM = 200;

module.exports = {
  'react': require('./react')(CHILDREN_NUM),
  'react-xjst': require('./react-xjst')(CHILDREN_NUM)
};
