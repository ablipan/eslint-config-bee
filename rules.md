# 规则
为了方便查找，参考 [ESLint](http://eslint.org/docs/rules/) 的分类方式。

## 规避错误
规避潜在的语法和逻辑错误。

* getter/setter 必须成对出现 ([accessor-pairs](http://eslint.org/docs/rules/accessor-pairs))

```js
// Bad
const o = {
  set a(value) {
    this.val = value
  }
```
```js}
// Good
const o = {
  set a(value) {
    this.val = value
  },
  get a() {
    return this.val
  }
}
```

* 不要在条件判断中进行赋值操作 ([no-cond-assign](http://eslint.org/docs/rules/no-cond-assign))

在条件判断中进行赋值操作有可能是无意之举，如果需要这样做的话，可以使用小括号将赋值操作括起来。

```js
// Bad
if (x = 0) {
  // ...
}

function setHeight(someNode) {
  do {
    someNode.height = '100px'
  } while (someNode = someNode.parentNode)
}
```

```js
// Good
if (x === 0) {
  // ...
}

function setHeight(someNode) {
  do {
    someNode.height = '100px'
  } while ((someNode = someNode.parentNode))
}
```

* 不要在正则中使用控制字符 ([no-control-regex](http://eslint.org/docs/rules/no-control-regex))

在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以正则表达式中如果包含这些字符的，很有可能是无意之举。

```js
// Bad
const pattern1 = /\x1f/
const pattern2 = new RegExp('\x1f')
```

```js
// Good
const pattern1 = /\x20/
const pattern2 = new RegExp('\x20')
```

* 不允许出现 debugger ([no-debugger](http://eslint.org/docs/rules/no-debugger))

!> 开发阶段不启用此规则，部署 (`process.env.NODE_ENV === 'production'`) 时必须启用

```js
// Bad
function isTruthy(x) {
  debugger
  return Boolean(x)
}
```

```js
// Good
function isTruthy(x) {
  return Boolean(x)
}
```

## 最佳实践
更好的编码方式可以避开一些不必要的麻烦。

* 大括号约定 ([curly](http://eslint.org/docs/rules/curly))

单行代码可以省略大括号，多行时必须有大括号

```js
// Bad
if (foo)
  doSomething()
else
  doSomethingElse()

if (foo) foo(
  bar,
  baz)
```
```js
// Good
if (foo) doSomething(); else doSomethingElse()

if (foo) {
  doSomething()
} else {
  doSomethingElse()
}

if (foo) foo(bar, baz)

if (foo) {
  foo(
    bar,
    baz)
}
```

* 成员表达式换行时点操作符的位置约定 ([dot-location](http://eslint.org/docs/rules/dot-location))

点操作符与属性在同一行

```js
// Bad
const foo = object.
property
```
```js
// Good
const foo = object
  .property
```

* 必须使用 === 和 !== ([eqeqeq](http://eslint.org/docs/rules/eqeqeq))

除了与 `null` 比较时可忽略，其他情况都必须使用 `===` 或 `!==`

```js
// Bad
a == b
foo == true
bananas != 1
apple == undefined
```
```js
// Good
a === b
foo === true
bananas !== 1
apple === undefined
apple == null
```

* 禁用 caller 或 callee ([no-caller](http://eslint.org/docs/rules/no-caller))

`arguments.caller` 和 `arguments.callee` 的使用会让代码变得不可维护

```js
// Bad
function foo(n) {
  if (n <= 0) {
    return
  }

  arguments.callee(n - 1)
}
```
```js
// Good
function foo(n) {
  if (n <= 0) {
    return
  }

  foo(n - 1)
}
```

## 变量
更规范的声明变量。

## Node.js 和 CommonJS
Node.js 和在浏览器中使用 CommonJS 的一些规范。

* 必须处理回调函数中的异常 ([handle-callback-err](http://eslint.org/docs/rules/handle-callback-err))

此规范将检测回调函数中的 err 或 error 变量是否被处理

```js
// Bad
function loadData(err, data) {
  doSomething()
}
```
```js
// Good
function loadData(err, data) {
  if (err) {
    console.log(err.stack)
  }
  doSomething()
}
```

## 代码风格
代码风格，虽主观，但也需要一定的规范。

* 数组方括号内侧不能有空白 ([array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing))

```js
// Bad
const arr = [ 'foo', 'bar']
const arr = ['foo', 'bar' ]
const arr = [[ 'foo' ], 'bar']
```
```js
// Good
var arr = []
var arr = ['foo', 'bar', 'baz']
var arr = [['foo'], 'bar', 'baz']
var arr = [
  'foo',
  'bar',
  'baz'
]
```

* 单行代码块内侧必须有空格 ([block-spacing](http://eslint.org/docs/rules/block-spacing))

```js
// Bad
function foo() {return true}
if (foo) { bar = 0}
```
```js
// Good
function foo() { return true }
if (foo) { bar = 0 }
```

* 大括号格式 ([brace-style](http://eslint.org/docs/rules/brace-style))

one true brace style : 将大括号放在控制语句或声明语句同一行的位置

```js
// Bad
function foo()
{
  return true
}

if (foo)
{
  bar()
}

try
{
  somethingRisky()
} catch (e)
{
  handleError()
}
```
```js
// Good
function foo() {
  return true
}

if (foo) {
  bar()
}

try {
  somethingRisky()
} catch (e) {
  handleError()
}
```

* 变量使用驼峰命名法 ([camelcase](http://eslint.org/docs/rules/camelcase))

```js
// Bad
import { no_camelcased } from 'external-module'

const my_favorite_color = '#112C85'

function do_something() {
}

obj.do_something = function () {
}
```
```js
// Good
import { no_camelcased as camelCased } from 'external-module'

const myFavoriteColor = '#112C85'
const _myFavoriteColor = '#112C85'
const myFavoriteColor_ = '#112C85'
const MY_FAVORITE_COLOR = '#112C85'

function doSomething() {
}
```

* 对象/数组中结尾逗号格式 ([comma-dangle](http://eslint.org/docs/rules/comma-dangle))

单行时不能结尾有逗号，多行时有或没有逗号都可以

```js
// Bad
const foo = { bar: 'baz', qux: 'quux', }

const arr = [1, 2,]

const arr = [1,
  2,]
```
```js
// Good
const foo = { bar: 'baz', qux: 'quux' }

const foo = {
  bar: 'baz',
  qux: 'quux'
}

const foo = {
  bar: 'baz',
  qux: 'quux',
}

const arr = [1, 2]

const arr = [
  1,
  2
]

const arr = [
  1,
  2,
]
```

* 逗号周围的空格格式 ([comma-spacing](http://eslint.org/docs/rules/comma-spacing))

逗号前能有空格，逗号后必须有空格

```js
// Bad
const arr = [1 , 2]
const obj = { 'foo': 'bar' ,'baz': 'qur' }
foo(a ,b)
```
```js
// Good
const arr = [1, 2]
const obj = { 'foo': 'bar', 'baz': 'qur' }
foo(a, b)
```

* 逗号分隔列表时放在当前行末尾 ([comma-style](http://eslint.org/docs/rules/comma-style))

```js
// Bad
const foo = { 'a': 1
  , 'b': 2 }

const baz = ['apples'
  , 'oranges']

function bar() {
  return {
    'a': 1
    , 'b:': 2
  }
}
```
```js
// Good
const foo = { 'a': 1,
  'b': 2 }

const baz = ['apples',
  'oranges']

function bar() {
  return {
    'a': 1,
    'b:': 2
  }
}
```

* 函数调用时函数名和小括号之间不能有空格 ([func-call-spacing](http://eslint.org/docs/rules/func-call-spacing))

```js
// Bad
fn ()

fn
()
```
```js
// Good
fn()
```

* 代码缩进 2 个空格 ([indent](http://eslint.org/docs/rules/indent))
  * 代码缩进使用 2 个空格：Google、npm、Node.js、Idiomatic、Felix
  * `SwitchCase` 不缩进
  * 函数体缩进 1 个单位

```js
// Bad
if (a) {
    b = c
}

switch (a) {
  case 'a':
    break
  case 'b':
    break
}

function foo() {
    e = f
}
```
```js
// Good
if (a) {
  b = c
}

switch (a) {
case 'a':
  break
case 'b':
  break
}

function foo() {
  e = f
}
```

* 对象键值之间的空格格式 ([key-spacing](http://eslint.org/docs/rules/key-spacing))

引号之前不能有空格，引号之后必须有空格

```js
// Bad
const obj = { 'foo':42 }
const obj = { 'foo' :42 }
```
```js
// Good
const obj = { 'foo': 42 }
```

* 关键字前后空格 ([keyword-spacing](http://eslint.org/docs/rules/keyword-spacing))

关键字前后必须有空格

```js
// Bad
if(foo) {
  // ...
}else if(bar) {
  // ...
}else{
  // ...
}
```
```js
// Good
if (foo) {
  // ...
} else if (bar) {
  // ...
} else {
  // ...
}

```

特殊情况

```js
// Good
let a = [this]

function * foo() {}

class A extends B{
  constructor() {
    super()
    // ...
  }
}

let a = <A foo={this.foo} bar={function () { }} />
```

* 构造函数名首字母必须大写 ([new-cap](http://eslint.org/docs/rules/new-cap))

`new` 关键字调用的函数必须首字母大写

```js
// Bad
const friend = new person()
```
```js
// Good
const friend = new Person()
```

* 无参构造函数必须带括号 ([new-parens](http://eslint.org/docs/rules/new-parens))

```js
// Bad
const friend = new Person
```
```js
// Good
const friend = new Person()
```

* 不要使用 Array 构造函数 ([no-array-constructor](http://eslint.org/docs/rules/no-array-constructor))

因为单参数陷阱 (new Array(1) 和 new Array(1, 2) 使用方式相似，单含义完全不同)，所以不允许使用 Array 构造函数来创建数组，唯一例外是：
给构造函数传递指定数值来创建稀疏数组。

```js
// Bad
const arr = Array(0, 1, 2)
```
```js
// Good
const arr = [0, 1, 2]
const arr = Array(50)
```
## ES6
ECMAScript 6 简称 ES6 也叫 ES2015。

* 箭头函数中的箭头前后必须有空格 ([arrow-spacing](http://eslint.org/docs/rules/arrow-spacing))

```js
// Bad
()=> {}
() =>{}
```
```js
// Good
() => {}
```

* 构造函数中必须调用 super() ([constructor-super](http://eslint.org/docs/rules/constructor-super))

```js
// Bad
class A extends B {
  constructor() {
    // do something...
  }
}
```
```js
// Good
class A extends B {
  constructor() {
    super()
    // do something...
  }
}
```

* Generators * 号前后必须有空格 ([generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing))

```js
// Bad
function* generator() {}

const anonymous = function *() {}

const shorthand = {*generator() {} }
```
```js
// Good
function * generator() {}

const anonymous = function * () {}

const shorthand = { * generator() {} }
```

* 不允许修改 `class` 声明的变量 ([no-class-assign](http://eslint.org/docs/rules/no-class-assign))

```js
// Bad
class A { }
A = 0

let A = class A {
  b() {
    A = 0
  }
}
```

!> 注意上面例子中: `b()` 中的 `A` 是指代所在的类，而不是 `let` 声明的 `A`，所以不允许修改，语法详情可见 [Class 表达式](http://es6.ruanyifeng.com/#docs/class#Class表达式)

```js
// Good
let A = class A { }
A = 0

let A = class {
  b() {
    A = 0
  }
}
```