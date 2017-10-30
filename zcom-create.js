#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const program = require('commander');
const path = require('path');
const pascalize = require('pascalize');
const colors = require('colors');

const {
  log,
  exec,
  boilerplateDir,
  currentDir
} = require('./utils');

program
  .arguments('[name]')
  .action(function (name, program, test) {
    const formattedName = pascalize(name);
    const finalDir = path.join(currentDir(), formattedName);

    // Copy boilerplate
    log(`${formattedName.bold.yellow} component created at ${finalDir}`);
    fs.copySync(boilerplateDir(), finalDir,{
      overwrite:false
    });

    // Run: npm install
    log(`Installing dependencies ...`);
    exec(`cd ${finalDir} && npm install`);
  })
  .parse(process.argv);
