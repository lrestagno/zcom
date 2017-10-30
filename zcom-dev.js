#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');

const program = require('commander');
const { exec, currentDir } = require('./utils');
const path = require('path');

const storybookConfigPath = path.join(__dirname, '.storybook');
const storybookBin = path.join(__dirname, 'node_modules/.bin/start-storybook');

exec(`STORYBOOK_CURRENT_DIR=${currentDir()} ${storybookBin} -p 9001 -c ${storybookConfigPath}`,{
  cwd:__dirname
})
