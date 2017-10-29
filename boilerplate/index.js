import React from 'react';
import PropTypes from 'prop-types';
import recompose from 'recompose';
import {
  eventHandler
} from './utils';

const MyComponent = ({someProp,onClick}) => {
  <div onClick={eventHandler('click in element', onClick)}>
    {someProp}
  </div>
}

MyComponent.propTypes = {
  someProp: PropTypes.string,
  onClick: PropTypes.func,
};

MyComponent.defaultProps = {
  someProp:'default value',
}

export default MyComponent;
