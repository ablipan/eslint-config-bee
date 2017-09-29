# ESLint-config-bee 🐝🐝🐝
ESLint rules config.

## Usage

### eslint-config-bee

JS

* `npm install eslint eslint-config-bee --save-dev`
* add config in `.eslintrc`

```json
{
  "extends": ["bee"]
}
```

React

* `npm install eslint-plugin-react --save-dev`
* add config in `.eslintrc`

```json
{
  "extends": ["bee", "bee/react"]
}
```

Only JSX

* add config in `.eslintrc`

```json
{
  "extends": ["bee", "bee/jsx"]
}
```

### Lint ES6/7 features
If you need to lint experimental features in ES6/7 (class properties, decorators, types),install [babel-eslint](https://github.com/babel/babel-eslint) `npm install babel-eslint --save-dev`,and add config in `.eslintrc`

```json
{
  "parser": "babel-eslint"
}
```