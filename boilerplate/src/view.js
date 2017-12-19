import React from 'react';
import { Container } from './styled';
import { eventHandler } from './utils';

export default ({children}) => (
  <Container onMouseEnter>
    MyComponent - {children}
  </Container>
)

// include only some markup and imports.
// this is the view.
// logic is forbidden here.
