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

  rules: {
    // get 和 set 方法必须成对出现
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 2,
    // 不检查箭头函数的括号
    'arrow-parens': 0,
    // 箭头函数中的箭头前后使用一致的空格
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    // 数组方括号内部两侧是否留白
    'array-bracket-spacing': [2, 'never'],
    // 避免在块作用域外部引用 var 申明的变量
    // 'block-scoped-var': 2,
    // 单行代码块内需要有空格
    'block-spacing': [2, 'always'],
    // 大括号格式: one true brace style
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // 强制使用驼峰命名规范
    'camelcase': [2, { 'properties': 'always' }],
    // 对象/数组中是否允许结尾有逗号
    'comma-dangle': [2, 'only-multiline'],
    // 逗号两侧的空格
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // 逗号分隔列表时放在当前行末尾
    'comma-style': [2, 'last'],
    // 循环复杂度限制
    // 'complexity': 0,
    // 使用计算属性对对象进行取值时，括号内部两侧是否留白
    // 'computed-property-spacing': 0,
    // 统一 return 格式
    // 'consistent-return': 0,
    // 统一 this 格式
    // 'consistent-this': 0,
    // 构造函数中必须调用 super()
    'constructor-super': 2,
    // 花括号约定
    'curly': [2, 'multi-line'],
    // switch 中必须有 default case
    // 'default-case': 0,
    // 成员表达式换行时点操作符的位置约定
    'dot-location': [2, 'property'],
    // 统一对象取值方式
    'dot-notation': 0,
    // 不检查行尾空行
    'eol-last': 0,
    // 使用 === 和 !==
    'eqeqeq': [2, 'always', { 'null': 'ignore' }],
    // 函数调用时函数名和括号之间不允许有空格
    'func-call-spacing': 2,
    // 'func-names': 0,
    // 'func-style': 0,
    // Generators * 号前后空格
    'generator-star-spacing': [2, { 'before': true, 'after': true }],
    // 'guard-for-in': 0,
    // 必须处理回调函数中的异常
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进 2 个空格
    'indent': [2, 2],
    // 对象键值之间的空格格式
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    // 关键字前后空格
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    // 'linebreak-style': 0,
    // 'lines-around-comment': 0,
    // 'max-nested-callbacks': 0,
    // 构造函数名首字母必须大写
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    // 无参构造函数必须带括号
    'new-parens': 2,
    // 'newline-after-var': 0,
    // 'no-alert': 0,
    // 禁用 Array 构造函数
    'no-array-constructor': 2,
    // 不允许使用 caller/callee
    'no-caller': 2,
    // 'no-catch-shadow': 0,
    // 不允许修改 class 声明的变量
    'no-class-assign': 2,
    // 条件判断中不允许赋值操作
    'no-cond-assign': 2,
    // 'no-console': 0,
    // 'no-constant-condition': 0,
    // 'no-continue': 0,
    // 不要在正则中使用控制字符
    'no-control-regex': 2,
    // 不允许出现 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 不允许删除变量
    'no-delete-var': 2,
    // 'no-div-regex': 0,
    // 不允许函数/方法中出现重复的参数
    'no-dupe-args': 2,
    // 不允许有重复的成员变量
    'no-dupe-class-members': 2,
    // 对象中不允许有重复的 key
    'no-dupe-keys': 2,
    // switch 中不允许有重复的 case
    'no-duplicate-case': 2,
    // 'no-else-return': 0,
    // 'no-empty': 0,
    // 正则中不允许有空的类别
    'no-empty-character-class': 2,
    // 不允许有空的解构表达式
    'no-empty-pattern': 2,
    // 'no-eq-null': 0,
    // 不允许使用 eval()
    'no-eval': 2,
    // 不允许对 catch 中的 error 重新赋值
    'no-ex-assign': 2,
    // 不允许扩展内置对象
    'no-extend-native': 2,
    // 避免多余的 bind()
    'no-extra-bind': 2,
    // 避免多余的 bool 类型转换
    'no-extra-boolean-cast': 2,
    // 避免使用多余的括号
    'no-extra-parens': [2, 'functions'],
    // 'no-extra-semi': 0,
    // 避免 switch 中多个 case 穿透
    'no-fallthrough': 2,
    // 小数点的前后必须都有数字
    'no-floating-decimal': 2,
    // 禁止为函数声明重新赋值
    'no-func-assign': 2,
    // 禁止修改只读的全局变量
    'no-global-assign': 2,
    // 禁止隐试调用 eval()
    'no-implied-eval': 2,
    // 'no-inline-comments': 0,
    // 函数申明必须在最外层
    'no-inner-declarations': [2, 'functions'],
    // 避免在 RegExp 构造函数中的使用不合法的字符串
    'no-invalid-regexp': 2,
    // 避免 tab 和 空格以外的其他空白字符
    'no-irregular-whitespace': 2,
    // 禁止使用 __iterator__ 属性
    'no-iterator': 2,
    // 禁止 label 与当前作用域中的变量重名
    'no-label-var': 2,
    // 禁止使用 label
    'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
    // 避免无意义的代码块
    'no-lone-blocks': 2,
    // 'no-lonely-if': 0,
    // 'no-loop-func': 0,
    // 'no-mixed-requires': 0,
    // 避免同时使用空格和 tab 进行缩进
    'no-mixed-spaces-and-tabs': 2,
    // 避免多余的空格
    'no-multi-spaces': 2,
    // 避免使用 \ 连接多行字符串
    'no-multi-str': 2,
    // 避免多余的空行
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    // 避免在关系运算符(in、instanceof)左侧直接进行非运算
    'no-unsafe-negation': 2,
    // 'no-nested-ternary': 0,
    // 'no-new': 2,
    // 'no-new-func': 0,
    // 禁止使用 Object 构造函数
    'no-new-object': 2,
    // 禁止使用 new require 语法
    'no-new-require': 2,
    // 避免不小心使用 new 调用 Symbol
    'no-new-symbol': 2,
    // 避免使用 new 调用 String, Number, Boolean
    'no-new-wrappers': 2,
    // 禁止将 Math, JSON, Reflect 对象当成函数调用
    'no-obj-calls': 2,
    // 禁止使用八进制字面量
    'no-octal': 2,
    // 禁止在字符串字面量中转义八进制
    'no-octal-escape': 2,
    // 'no-param-reassign': 0,
    // 避免直接使用 Node.js 中的 path 进行字符串
    'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 禁止使用 __proto__ 属性
    'no-proto': 0,
    // 避免重复申明
    'no-redeclare': 2,
    // 避免正则中包含多个空格
    'no-regex-spaces': 2,
    // 'no-restricted-modules': 0,
    // 不允许在 return 语句中进行赋值操作
    'no-return-assign': [2, 'except-parens'],
    // 'no-script-url': 0,
    // 不允许自赋值
    'no-self-assign': 2,
    // 不允许自比较
    'no-self-compare': 2,
    // 不允许顺序赋值
    'no-sequences': 2,
    // 'no-shadow': 0,
    // 避免使用保留字
    'no-shadow-restricted-names': 2,
    // 不允许有洞的数组 (使用多个逗号组成的稀疏数组)
    'no-sparse-arrays': 2,
    // 'no-sync': 0,
    // 'no-ternary': 0,
    // 在 super() 之前不允许使用 this/super 关键字
    'no-this-before-super': 2,
    // 不允许 throw 除 Error 以外的对象
    'no-throw-literal': 2,
    // 行尾不允许有多余的空白
    'no-trailing-spaces': 2,
    // 不允许引用为申明的变量
    'no-undef': 2,
    // 不允许将变量初始化为 undefined
    'no-undef-init': 2,
    // 'no-undefined': 0,
    // 'no-underscore-dangle': 0,
    // 避免难以理解的多行表达式
    'no-unexpected-multiline': 2,
    // 确保循环的条件变量都会在循环中被修改
    'no-unmodified-loop-condition': 2,
    // 避免无意义的三元表达式
    'no-unneeded-ternary': [2, { 'defaultAssignment': false }],
    // 避免编写不可能访问到的代码
    'no-unreachable': 2,
    // 不允许在 finally 中直接出现 return, throw, break, continue 等语句
    'no-unsafe-finally': 2,
    // 'no-unused-expressions': 0,
    // 避免定义未使用的变量/函数/参数
    'no-unused-vars': process.env.NODE_ENV === 'production' ? [2, { 'vars': 'all', 'args': 'none' }] : 0,
    // 避免无意义的 call 和 apply 方法
    'no-useless-call': 2,
    // 避免无意义的计算属性 key
    'no-useless-computed-key': 2,
    // 避免无意义的类构造器函数
    'no-useless-constructor': 2,
    // 避免无意义的转义操作
    'no-useless-escape': 0,
    // 'no-use-before-define': 0,
    // 使用 let const 代替 var
    'no-var': 2,
    // 'no-void': 0,
    // 'no-warning-comments': 0,
    // 对象和属性的之间的圆点或大括号前不能有空格
    'no-whitespace-before-property': 2,
    // 不允许使用 with 表达式
    'no-with': 2,
    // 对象字面量，解构赋值，import/export 中花括号内部两侧是否留白
    'object-curly-spacing': [2, 'always'],
    // 'object-shorthand': 0,
    // 确保一个作用域中的变量一起申明
    'one-var': [2, { 'initialized': 'never' }],
    // 'operator-assignment': 0,
    // 统一换行方式
    'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    // 统一代码块中的内部空行方式
    'padded-blocks': [2, 'never'],
    // 优先使用 const
    'prefer-const': 2,
    // 'quote-props': 0,
    // 统一引号格式
    'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    // 'radix': 2,
    // 是否使用分号
    'semi': [2, 'never'],
    // 分号前后的空白
    'semi-spacing': [2, { 'before': false, 'after': true }],
    // 'sort-vars': 0,
    // 代码块之前是否需要空格
    'space-before-blocks': [2, 'always'],
    // 具名函数的函数名与圆括号之间不能有空格 如: function foo() {}
    // 匿名函数 function 关键字与括号之间必须有空格 如: function () {}
    // 忽略 async 箭头函数, 如: async () => {}
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
    // 圆括号内部两侧是否需要空白
    'space-in-parens': [2, 'never'],
    // 中间运算符两侧是否需要留白
    'space-infix-ops': 2,
    // 一元操作符前后是否需要留白
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    // 注释符号// 和 /* 后是否需要留白
    'spaced-comment': [2, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],
    // 'strict': 0,
    // 字符串模板花括号内部是否需要留白
    'template-curly-spacing': [2, 'never'],
    // 避免和 NaN 做比较运算
    'use-isnan': 2,
    // 'valid-jsdoc': 0,
    // 确保 与 typeof 表达式做比较的字符串的合法性
    'valid-typeof': 2,
    // 'vars-on-top': 0,
    // 立即执行的函数必须使用圆括号包裹
    'wrap-iife': [2, 'any'],
    // 'wrap-regex': 0,
    // yield* 语法中 * 号前后是否留白
    'yield-star-spacing': [2, 'both'],
    // 统一条件语句中的变量和字面量的先后位置
    'yoda': [2, 'never']
  }
}
