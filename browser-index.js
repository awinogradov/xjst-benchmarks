'use strict';

const ReactDom = require('react-dom');
const suits = {
  renderToDom: require('./renderToDom')
};
let results;

Object.keys(suits).forEach(suitName => {
  const suite = new Benchmark.Suite(
    suitName,
    {
      onStart() {
        results = [];
        console.log(`Starts suit "${suitName}"`);
      },

      onComplete() {
        results.sort((resultA, resultB) => resultA.mean - resultB.mean).forEach((res) => {
          console.log(res['']);
          console.log('mean time: ', res['mean time']);
          console.log('ops/sec: ', res['ops/sec']);
          console.log('===');
        });
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
        defer: true,

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

  suite.run({ async: true });
});
