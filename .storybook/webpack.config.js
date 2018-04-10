const path = require('path');
const babelOptions = require('../babel-options');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.forEach(r=>{
    if(r.loader && r.loader.includes('babel')){
      r.test = /(\.jsx?$|\.svg$)/;
      r.include.push(process.env.STORYBOOK_CURRENT_DIR)
      r.exclude.push(process.env.STORYBOOK_CURRENT_DIR+'/node_modules')

      r.query = babelOptions;
    }
  });  

  return storybookBaseConfig;
};
