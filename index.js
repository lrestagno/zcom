#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .command('dev', 'run dev mode')
  .command('create', 'create a component', {isDefault: true})
  .parse(process.argv);
