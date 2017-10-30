#!/usr/bin/env node
'use strict';

const program = require('commander');
const { exec, currentDir } = require('./utils');
const path = require('path');

const storybookConfigPath = path.join(__dirname, '.storybook');

exec(`STORYBOOK_CURRENT_DIR=${currentDir()} start-storybook -p 9001 -c ${storybookConfigPath}`,{
  cwd:__dirname
})
