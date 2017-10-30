#!/usr/bin/env node
'use strict';
const fs = require('fs-extra');
const program = require('commander');
const path = require('path');
const pascalize = require('pascalize');
const colors = require('colors');
const replace = require('replace-in-file');
const decamelize = require('decamelize');

const {
  log,
  exec,
  boilerplateDir,
  currentDir
} = require('./utils');

program.arguments('[name]').action(async (name, program, test)=>{
  // (async ()=>{
    const componentName = pascalize(name);
    const packageName = 'react-' + decamelize(componentName,'-');
    const componentDir = path.join(currentDir(), packageName);

    // Copy boilerplate
    log(`${componentName.bold.yellow} component created at ${componentDir}`);
    await fs.copy(boilerplateDir(), componentDir,{
      overwrite:false
    });

    await replace({
      files: componentDir + '/**/*.*',
      from: /MyComponent/g,
      to: componentName,
    })

    await replace({
      files: componentDir + '/**/*.*',
      from: /my-component/g,
      to: packageName,
    })

    // Run: npm install
    log(`Installing dependencies ...`);
    await exec(`cd ${componentDir} && npm install`);
    log(`Done!`);

    log(`${'PST!'.red} Consider set your own registry inyour package.json.
###############################################################

"publishConfig":{
  "registry" : "http://my-internal-registry.local"
}

###############################################################
    `);
  // })();
}).parse(process.argv);
