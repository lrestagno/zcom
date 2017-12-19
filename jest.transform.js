const babel = require('babel-jest');
const options = require('./babel-options')
module.exports = babel.createTransformer(options);
