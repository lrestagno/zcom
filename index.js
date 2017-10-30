#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .command('create', 'create a component', {isDefault: true})
  .command('dev', 'run dev mode')
  .command('build', 'build the component')
  .command('build-storybook', 'build storybook static')
  .command('pap', 'patch, build and publish')
  .parse(process.argv);
