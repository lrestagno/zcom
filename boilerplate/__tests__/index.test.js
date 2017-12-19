import React from 'react';
import Comp  from '../src/index';
import {
  render,
  configure
} from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Component render the children', () => {
  const wrapper = render(<Comp />);
  expect(wrapper.text()).toContain('MyComponent - Hola');
});
