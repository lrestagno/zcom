import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';
import { defaultTheme } from './styled';
import View from './view';

const MyComponent = (props) => (
  <ThemeProvider theme={defaults(props.theme, defaultTheme)}>
    <View {...props} />
  </ThemeProvider>
)

MyComponent.propTypes = {};

MyComponent.defaultProps = {
  theme:{}
}

export default MyComponent;
