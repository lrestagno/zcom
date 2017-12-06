import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme, withDocs } from 'storybook-readme';
const req = require.context(process.env.STORYBOOK_CURRENT_DIR, true, /^\.\/src\/*stories\.js$/);
try{
  const readme = require(process.env.STORYBOOK_CURRENT_DIR+'/readme.md');
}catch(e){}

const readmeNotFound = 'Creá el **readme.md** en el root de tu component vieja!'
const readmeContent = typeof readme != 'undefined' ? readme : readmeNotFound;

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(req);

modules.forEach(m=>{
  const storiesContainer = storiesOf(m.displayName || 'Component', module);

  Object.keys(m).forEach(k=>{
    if(k=='displayName') return true;
    const { title, story } = m[k];
    title && story && storiesContainer.add(title, withReadme(readmeContent ,story({action})))
  })
})
