const fs = require('fs');
const path = require('path');
const rcPath = path.resolve(__dirname,'.babelrc');
const rc = JSON.parse(fs.readFileSync(rcPath));

const options = {
  presets:rc.presets.map(p=>path.resolve(__dirname,'node_modules',`babel-preset-${p}`)),
  plugins:rc.plugins.map(p=>(
    [
      path.resolve(__dirname,'node_modules',`babel-plugin-${p[0]}`),
      (p[1]||{})
    ]
  )),
}

// console.log(options)
module.exports = options;
