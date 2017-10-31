import React from 'react';
import MyComponent from './'
import recompose from 'recompose';

// displayName will be the title of the story
export const displayName = 'MyComponent';

export const firstStory = {
  title:'MyComponent First Story',
  story: ({action}) => () => (
    <MyComponent
      content="First Story"
      onClick={action('click from story')}
    />
  )
};
