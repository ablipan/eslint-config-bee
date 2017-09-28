module.exports = {
  // jsx 中的属性优先使用双引号
  'jsx-quotes': ['error', 'prefer-double'],
  // 统一布尔类型属性的风格
  'react/jsx-boolean-value': ['error', 'never'],
  // jsx 属性的花括号中两侧不允许有空白符
  'react/jsx-curly-spacing': [2, 'never', { 'allowMultiline': false }],
  // jsx 属性的等号两侧不允许有空白符
  'react/jsx-equals-spacing': ['error', 'never'],
  // jsx 缩进
  'react/jsx-indent': ['error', 2],
  // jsx 属性缩进
  'react/jsx-indent-props': ['error', 2],
  // 不允许有重复的属性
  'react/jsx-no-duplicate-props': 'error',
  // 防止使用拼写错误, 未定义的组件
  'react/jsx-no-undef': 'error',
  // 标签闭合前需要有空白
  'react/jsx-space-before-closing': ['error', 'always'],
  // 检查 React 变量是否已使用（使用了 jsx，React 变量即为已使用）
  'react/jsx-uses-react': 'error',
  // 检测 jsx 中变量使用情况（ESLint 的 no-unused-vars 不会检查 jsx，此规则是 no-unused-vars 的补充）
  'react/jsx-uses-vars': 'error',
  // 组件优先使用自闭合的形式
  'react/self-closing-comp': 'error'
}