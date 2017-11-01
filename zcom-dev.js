#!/usr/bin/env node
'use strict';

const colors = require('colors');
const { exec, currentDir, log } = require('./utils');
const path = require('path');

const port = process.env.PORT || 8888;

const storybookConfigPath = path.join(__dirname, '.storybook');

(async ()=>{
  try{

    await exec(
      `STORYBOOK_CURRENT_DIR=${currentDir()} `+
      `start-storybook -p ${port} `+
      `-c ${storybookConfigPath} `,
      { cwd:__dirname }
    );

  }catch(e){
    console.log(e);
  }

})()
