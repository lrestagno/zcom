import React from 'react';
import MyComponent from './'
import recompose from 'recompose';

export const displayName = 'My Component';

export default [{
  title:'First Story',
  Story: () => (
    <MyComponent content="First Story"></MyComponent>
  )
}];
