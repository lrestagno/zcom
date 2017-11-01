#!/usr/bin/env node
'use strict';
const colors = require('colors');
const path = require('path');
const {
  readJson,
  copy
} = require('fs-extra');
const transform = require('babel-transform-dir');

const {
  log,
  execSync,
  sourceDir,
  distDir,
  currentDir,
} = require('./utils');

const presets = [
  path.join(__dirname,'node_modules/babel-preset-env'),
  path.join(__dirname,'node_modules/babel-preset-react')
];


(async ()=>{
  log('transpiling ...');
  await transform(sourceDir(), distDir(), {
    babel: {
      presets:presets
    },
    // Invokes whenever a file is transformed and written.
    onFile: (file) => {
      log(`  src/${file} -> dist/${file}`)
    }
  });

  log('transpiling done!')
  log('copying package.json ...');
  await copy(currentDir('package.json'), distDir('package.json'));

  log('generating readme.md ...');
  await copy(currentDir('readme.md'), distDir('readme.md'));

  log('');
  log('build ready in ./dist'.green);
})();
