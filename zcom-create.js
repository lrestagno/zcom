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

program
.option('-i, --intern [intern]', 'Create the component in an intern inside the project')
.arguments('[name]')
.action(async (name)=>{
    const { intern } = program;
    const componentName = pascalize(name);
    const packageName = (intern ? '' : 'react-') + decamelize(componentName,'-');
    const internDir = intern && (typeof intern == 'string' ? intern : 'components/');
    const componentDir = intern ? currentDir(internDir, packageName) : currentDir(packageName);
    const boilerplateComponent = intern ? boilerplateDir('src') : boilerplateDir();

    log(`Creating component ...`);
    await fs.copy(boilerplateComponent, componentDir,{
      overwrite:false
    });
    log(`${componentName.bold.yellow} component created at ${componentDir}`);

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

    if(!intern){

      log(`Installing dependencies ...`);
      await exec(`cd ${componentDir} && npm install`);
      log(`Done!`);

      log(`${'PST!'.green} Consider set your own registry inyour package.json.

###############################################################

"publishConfig":{
  "registry" : "http://my-internal-registry.local"
}

###############################################################

      `);
    }

})
.parse(process.argv);
