import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

import { eventHandler } from './utils';

const MyComponent = ({
  content,
  onClick
}) => (
  <Container>
    <div onClick={eventHandler('click in element', onClick)}>
      {content}
    </div>
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
