#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');
const fs = require('fs-extra');
const program = require('commander');
const path = require('path');
const templateDir = path.join(__dirname, 'boilerplate')
const currentDir = process.cwd();
const pascalize = require('pascalize');
const colors = require('colors');
const execa = require('execa');
const {sleep} = require('sleep');

const {
  log
} = require('./utils');

program
  .arguments('[name]')
  .action(function (name, program, test) {
    const formattedName = pascalize(name);
    const finalDir = path.join(currentDir,formattedName);
    
    log(`Just relax and let me do the work 😉 \n`);
    sleep(1);
    // Copy boilerplate
    log(`${formattedName.bold.yellow} component created at ${finalDir}`);
    fs.copySync(templateDir, finalDir);

    // Run: npm install
    log(`Installing dependencies`);
    execa.shell(`cd ${finalDir} && npm install`).stdout.pipe(process.stdout);;
  })
  .parse(process.argv);
