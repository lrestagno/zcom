import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

import { eventHandler } from './utils';

const MyComponent = ({
  content,
  onClick
}) => (
  <Container onClick={eventHandler('click in element', onClick)}>
    {content}
  </Container>
)

MyComponent.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};

MyComponent.defaultProps = {
  content:'default value',
}

export default MyComponent;
