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
  libDir,
  currentDir,
} = require('./utils');

const presets = [
  path.join(__dirname,'node_modules/babel-preset-stage-0'),
  path.join(__dirname,'node_modules/babel-preset-env'),
  path.join(__dirname,'node_modules/babel-preset-react')
];

const svgPlugins = path.join(__dirname,'node_modules/babel-plugin-inline-react-svg');

const inlineImportPlugin = [
  path.resolve(__dirname,'node_modules/babel-plugin-inline-import/build/index.js'),
  {
    "extensions": [".css"]
  }
];

const inlineImportDataURIPlugin = [
  path.resolve(__dirname,'node_modules/babel-plugin-inline-import-data-uri/build/index.js'),
  {
    "extensions": [".png"]
  }
];

const plugins = [svgPlugins, inlineImportPlugin, inlineImportDataURIPlugin];

(async ()=>{
  log('transpiling ...');
  try{
    await transform(sourceDir(), libDir(), {
      babel: {
        presets,
        plugins,
        filename:sourceDir('index.js')
      },
      // Invokes whenever a file is transformed and written.
      onFile: (file) => {
        log(`  src/${file} -> lib/${file}`)
      }
    });
  }catch(e){
    console.log(e);
  }

  log('transpiling done!')
  log('copying package.json ...');
  await copy(currentDir('package.json'), libDir('package.json'));

  log('generating readme.md ...');
  await copy(currentDir('readme.md'), libDir('readme.md'));

  log('');
  log('build ready in ./lib'.green);
})();
