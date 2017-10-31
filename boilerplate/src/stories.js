import React from 'react';
import MyComponent from './'
import recompose from 'recompose';

export const displayName = 'MyComponent';

export default [{
  title:'MyComponent',
  Story: () => (
    <MyComponent content="First Story"></MyComponent>
  )
}];
