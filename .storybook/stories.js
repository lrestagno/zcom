import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
const storiesModule = require(`${process.env.STORYBOOK_CURRENT_DIR}/src/stories`);
const displayName = storiesModule.displayName;
const allStories = storiesModule.default;
const ComponentName = storiesModule.displayName || 'Component';
const storiesContainer = storiesOf(ComponentName, module)

allStories.forEach(({Story, title})=>{
  storiesContainer.add(title, Story)
})
