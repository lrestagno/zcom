#!/usr/bin/env node
'use strict';

const program = require('commander');
const { exec, currentDir } = require('./utils');
const path = require('path');

const storybookConfigPath = path.join(__dirname, '.storybook');

exec(`npm version patch && zcom build && cd dist && npm publish`)
