#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const program = require('commander');
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

const babelRCPath = path.join(__dirname,'.babelrc');
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

  log('Transpiling done')
  log('Copying package.json ...');
  await copy(currentDir('package.json'), distDir('package.json'));

  log('Generating Readme ...');
  console.log(sourceDir());
  console.log(distDir());
})();
