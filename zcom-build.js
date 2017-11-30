#!/usr/bin/env node
'use strict';
const colors = require('colors');
const path = require('path');
const fs = require('fs-extra');
const util = require('util');
const {
  transformFile
} = require('babel-core');
const transformFileProm = util.promisify(transformFile);
const writeFile = util.promisify(fs.writeFile);
const glob = require ('glob');
const {
  readJson,
  copy
} = require('fs-extra');

const {
  log,
  exec,
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
const babelBinPath = path.resolve(__dirname,'node_modules/.bin/babel')
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

const promise = (async ()=>{
  log('transpiling ...');
  try{
    const options = {
      presets,
      plugins,
    }

    await fs.emptyDir(libDir())
    const globPattern = `${sourceDir()}/**/*.js`;
    const files = glob.sync(globPattern);

    for(let file of files){
      const relativePath = path.relative(sourceDir(), file);
      const destinationPath = path.resolve(libDir(relativePath));

      const { code } = await transformFileProm(file, options);
      await fs.ensureFile(destinationPath);
      await writeFile(destinationPath, code);
      log(`${relativePath} -> transpiled`);
    }

  }catch(e){
    console.log(e);
  }
  log('transpiling done!');

  log('copying package.json ...');
  await copy(currentDir('package.json'), libDir('package.json'));

  log('generating readme.md ...');
  await copy(currentDir('readme.md'), libDir('readme.md'));

  // TODO: Append proptypes to readme
  // const propTypes = require(libDir()).default.propTypes;
  // console.log(Object.keys(propTypes));

  log('');
  log('build ready in ./lib'.green);
})();

module.exports = promise;
