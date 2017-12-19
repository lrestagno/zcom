const path = require('path');
const babel = require('babel-jest');

module.exports = {
  transform: {
     "^.+\\.jsx?$": path.join(__dirname,'jest.transform.js')
  },
  rootDir: path.join(process.env.CURRENT_DIR,'__tests__')
};
