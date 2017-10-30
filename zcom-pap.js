#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const {
  exec,
  log
} = require('./utils');

(async ()=>{
  log('Running patch & publish in ./dist directory');
  try{
    await exec(`npm version patch && zcom build && cd dist && npm publish`);
  }catch(e){
    log(e);
  }
})();
