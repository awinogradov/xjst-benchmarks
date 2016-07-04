'use strict';

const benchmark = require('benchmark');
const cliff = require('cliff');
const fs = require('fs');
let results;

const suits = {
  renderToString: require('./renderToString')
};
Object.keys(suits).forEach(suitName => {
  const suite = new benchmark.Suite(
    suitName,
    {
      onStart() {
        results = [];
        console.log(`Starts suit "${suitName}"`);
      },

      onComplete() {
        console.log('\n' + cliff.stringifyObjectRows(
          results.sort((resultA, resultB) => resultA.mean - resultB.mean),
          ['', 'mean time', 'ops/sec'],
          ['', 'green', 'yellow']) + '\n');
      }
    });
  const test = suits[suitName];

  Object.keys(test).forEach(testName => {
    let i = 0;
    let name = `  ${testName} `;

    suite.add(
      testName,
      test[testName],
      {
        onStart() {
          console.log(`${name}`);
        },

        onCycle() {
          console.log(`\x1B[1A${name}` + new Array(i++).join('.'));
        },

        onComplete() {
          results.push({
            '': name,
            mean: this.stats.mean,
            'mean time': (this.stats.mean * 1000).toFixed(3) + 'ms',
            'ops/sec': (1 / this.stats.mean).toFixed(0)
          });
        }
      });
  });

  suite.run();
});
