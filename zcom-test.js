#!/usr/bin/env node
'use strict';
const program = require('commander');
const {
  exec,
  log,
  currentDir
} = require('./utils');

const promise = (async ()=>{
  try{
    await exec(`CURRENT_DIR=${currentDir()} jest --watch --no-cache`,
      { cwd:__dirname }
    );
  }catch(e){
    log(e);
  }
})();

module.exports = promise;
