#!/usr/bin/env node
'use strict';
const program = require('commander');
const {
  exec,
  log
} = require('./utils');

(async ()=>{
  log('🤘');
  try{
    await require('./zcom-pap');
    await exec(`git push origin master`);
  }catch(e){
    log(e);
  }
})();
