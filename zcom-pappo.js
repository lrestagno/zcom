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
    await exec(`zcom pap && git push origin master`);
  }catch(e){
    log(e);
  }
})();
