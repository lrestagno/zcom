const colors = require('colors');
const execa = require('execa');
const path = require('path');
const fs = require('fs-extra');

exports.log = (...args) => console.log('ZCOM '.bgMagenta.yellow,...args);

exports.exec = (command,options) => {
  const executing = execa.shell(command,options);
  executing.stdout.pipe(process.stdout);
  executing.stderr.pipe(process.stderr);
};

exports.currentDir = (...paths) => path.join(process.cwd(), ...paths);
exports.sourceDir = (extraPath='') => this.currentDir('src', extraPath);
exports.distDir = (extraPath='') => this.currentDir('dist', extraPath);
exports.boilerplateDir = () => path.join(__dirname, 'boilerplate')
