import React from 'react';
import { Container } from './styled';
import { eventHandler } from './utils';

export default ({
  onClick,
  content
}) => (
  <Container onClick={eventHandler('click in element', onClick)}>
    MyComponent - {content}
  </Container>
)

// include only some markup and imports.
// this is the view. logic is forbidden here.
