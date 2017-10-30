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
  log('Transpiling ...');
  await transform(sourceDir(), distDir(), {
    babel: {
      presets:presets
    },
    // Invokes whenever a file is transformed and written.
    onFile: (file) => {
      log(`  src/${file} -> dist/${file}`)
    }
  });

  log('Transpiling done!')
  log('Copying package.json ...');
  await copy(currentDir('package.json'), distDir('package.json'));

  log('Generating readme.md ...');
  await copy(currentDir('readme.md'), distDir('readme.md'));

  log('');
  log('Build ready in ./dist'.green);
})();
