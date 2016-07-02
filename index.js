"use strict";

const teleport = require('tlprt');

const benchmark = require('benchmark');
const cliff = require('cliff');
const fs = require('fs');
const join = require('path').join;
const suits = {
  renderToString: require('./renderToString')
};
const versions = JSON.parse(fs.readFileSync(join(
  __dirname, 'package.json'),
  'utf8'
)).dependencies;

let results;

// teleport({
//     libName: 'example',
//     techs: ['bemhtml.js'],
//     platforms: ['desktop'],
//     entities: ['templates'],
//     levels: {
//       desktop: [{
//         path: join(process.cwd(), 'renderToString', 'react-xjst')
//       }]
//     },
//     exportPath: join(process.cwd(), 'renderToString', 'react-xjst', 'assets')
// }).then(() => {
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
      let name = `  ${testName} v${versions[testName]} `;

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
// });
