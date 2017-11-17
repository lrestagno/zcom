#!/usr/bin/env node
'use strict';
const colors = require('colors');
const program = require('commander');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .command('create', 'create a component')
  .command('dev', 'run dev mode')
  .command('build', 'build the component')
  .command('build-storybook', 'build storybook static')
  .command('pap', 'patch, (build) and publish (npm)')
  .command('pappo', 'patch, (build), publish (npm) and push (git origin)')
  .command('serve', 'build storybook and serve from local')
  .parse(process.argv);
