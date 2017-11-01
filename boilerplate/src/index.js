import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { defaults } from 'lodash';
import { componentTheme } from './styled';
import View from './view';

const mainTheme = {} // frequently an import 

const MyComponent = (props) => (
  <ThemeProvider theme={defaults(props.theme, componentTheme(mainTheme))}>
    <View {...props} />
  </ThemeProvider>
)

MyComponent.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};

MyComponent.defaultProps = {
  content:'default value',
  theme:{}
}

export default MyComponent;
