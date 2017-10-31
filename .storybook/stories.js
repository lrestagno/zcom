import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const req = require.context(process.env.STORYBOOK_CURRENT_DIR, true, /[^dist].stories\.js$/)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(req);

modules.forEach(m=>{
  const storiesContainer = storiesOf(m.displayName || 'Component', module)
  m.default.forEach(({Story, title})=>{
    storiesContainer.add(title, Story)
  })
})
