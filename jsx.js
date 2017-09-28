/* eslint-disable no-var */
var jsxRules = require('./_jsx.js')

module.exports = {
  'root': true,

  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },

  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  },

  'plugins': [
    'react'
  ],

  rules: jsxRules
}
