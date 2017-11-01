const ngrok = require('ngrok');
const pify = require('pify');
const port = process.env.PORT || 8889;
const express = require('express');
const { exec, currentDir, log } = require('./utils');
const app = express();

const storybookBuildDir = currentDir('.storybook-static');

app.use(express.static(storybookBuildDir));

(async ()=>{
  try{

    await require('./zcom-build-storybook');
    const res = await pify(app).listen(port);

    const url = await pify(ngrok).connect({
      addr:port,
      inspect:false,
    });

    log('------------------------------------------')
    log(`served in ${url}`.cyan);
    log('------------------------------------------')

  }catch(e){
    console.log(e);
  }

})()
