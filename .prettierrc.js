const fabric = require('@umijs/fabric')

module.exports = {
  ...fabric.prettier,
  semi: false,
  jsxSingleQuote: true,
  singleQuote: true,
}
