const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.forEach(r=>{
    if(r.loader.includes('babel')){
      r.test = /(\.jsx?$|\.svg$)/;
      r.include.push(process.env.STORYBOOK_CURRENT_DIR)
      r.exclude.push(process.env.STORYBOOK_CURRENT_DIR+'/node_modules')

      r.query.presets=[
        path.resolve(__dirname,'../node_modules/babel-preset-stage-0'),
        path.resolve(__dirname,'../node_modules/babel-preset-env'),
        path.resolve(__dirname,'../node_modules/babel-preset-react')
      ]

      r.query.plugins.push(
        path.resolve(__dirname,'../node_modules/babel-plugin-inline-react-svg/lib/index.js'),
        [path.resolve(__dirname,'../node_modules/babel-plugin-inline-import/build/index.js'),{
          "extensions": [
            ".css"
          ]
        }],
        [path.resolve(__dirname,'../node_modules/babel-plugin-inline-import-data-uri/build/index.js'),{
          "extensions": [
            ".png"
          ]
        }],
      );
    }
  })

  return storybookBaseConfig;
};
