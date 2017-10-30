#!/usr/bin/env node
'use strict';
const pkg = require('./package.json');

const program = require('commander');
const { exec, currentDir } = require('./utils');
const path = require('path');


const storybookConfigPath = path.join(__dirname, '.storybook');
const storybookBin = path.join(__dirname, 'node_modules/.bin/build-storybook');

exec(`STORYBOOK_CURRENT_DIR=${currentDir()} ${storybookBin} -c ${storybookConfigPath} -o ${currentDir('.storybook-static')}`,{
  cwd:__dirname
})
