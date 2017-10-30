import React from 'react';
import PropTypes from 'prop-types';

import {
  eventHandler
} from './utils';

const MyComponent = ({
  content,
  onClick
}) => (
  <div onClick={eventHandler('click in element', onClick)}>
    {content}
  </div>
)

MyComponent.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};

MyComponent.defaultProps = {
  content:'default value',
}

export default MyComponent;
