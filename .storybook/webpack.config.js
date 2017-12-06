const path = require('path');


const inlineSVG = path.resolve(__dirname,'../node_modules/babel-plugin-inline-react-svg/lib/index.js');

const inlineImportURI = [
  path.resolve(__dirname,'../node_modules/babel-plugin-inline-import/build/index.js'),
  {
    "extensions": [".css"]
  }
];

const inlineImportDataURI = [
  path.resolve(__dirname,'../node_modules/babel-plugin-inline-import-data-uri/build/index.js'),
  {
    "extensions": [".png"]
  }
];

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

      r.query.plugins.push(inlineSVG)
      r.query.plugins.push(inlineImportURI)
      r.query.plugins.push(inlineImportDataURI)
    }
  })

  storybookBaseConfig.module.rules.push({
    test: /\.md$/,
    use: path.resolve(__dirname,'../node_modules/raw-loader'),
  })

  return storybookBaseConfig;
};
