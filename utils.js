const colors = require('colors');
const execa = require('execa');
const path = require('path');
const fs = require('fs-extra');

exports.log = (...args) => console.log('zcom '.bgMagenta.yellow,...args);

exports.exec = (command,options) => {
  const executing = execa.shell(command,options);
  executing.stdout.pipe(process.stdout);
  executing.stderr.pipe(process.stderr);
  return executing;
};

exports.currentDir = (...paths) => path.join(process.cwd(), ...paths);
exports.sourceDir = (extraPath='') => this.currentDir('src', extraPath);
exports.libDir = (extraPath='') => this.currentDir('lib', extraPath);
exports.zcomDir = (...paths) => path.join(__dirname, ...paths);
exports.boilerplateDir = (...paths) => this.zcomDir('boilerplate', ...paths);
