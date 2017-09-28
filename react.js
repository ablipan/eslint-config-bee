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

  rules: Object.assign({}, jsxRules, {
    // 不要在 jsx 属性中直接使用 .bind()（每一次 render 时 bind() 都会产生一个新的函数，这会影响性能）
    'react/jsx-no-bind': ['error', {
      'allowArrowFunctions': true,
      'allowBind': false,
      'ignoreRefs': true
    }],
    // 组件更新时调用 setState() 会触发二次 render()
    'react/no-did-update-set-state': 'error',
    // 防止使用未知的 DOM 属性
    'react/no-unknown-property': 'error',
    // 防止未定义 prop 校验
    'react/prop-types': 'error',
    // 在使用 jsx 时，React 变量必须在当前作用域中定义
    'react/react-in-jsx-scope': 'error'
  })
}