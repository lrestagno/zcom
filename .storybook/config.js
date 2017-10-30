const { configure } = require('@storybook/react');
const { utils } = require('@storybook/addons');

function loadStories() {
  require('./stories');
}

configure(loadStories, module);
