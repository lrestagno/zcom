#!/usr/bin/env node
'use strict';

const program = require('commander');
const colors = require('colors');
const {
  exec,
  currentDir,
  log
} = require('./utils');
const path = require('path');
const storybookConfigPath = path.join(__dirname, '.storybook');

module.exports = (async ()=>{

  try{
    await exec(`STORYBOOK_CURRENT_DIR=${currentDir()} build-storybook -c ${storybookConfigPath} -o ${currentDir('.storybook-static')}`,{
      cwd:__dirname
    });
  }catch(e){
    log(e);
  }

  log('storybook built in .storybook-static');
})();
