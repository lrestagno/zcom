#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const {
  exec,
  log
} = require('./utils');

(async ()=>{
  log('running patch & publish in ./lib directory');
  try{
    await exec(`npm version patch && zcom build && cd lib && npm publish`);
  }catch(e){
    log(e);
  }
})();
