#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const {
  exec,
  log
} = require('./utils');

const promise = (async ()=>{
  log('running patch & publish in ./lib directory');
  try{
    await exec(`npm version patch`);
    await require('./zcom-build');
    await exec(`cd lib && npm publish`);
  }catch(e){
    log(e);
  }
})();

module.exports = promise;
