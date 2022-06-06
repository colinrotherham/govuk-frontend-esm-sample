const { resolve } = require('path')

module.exports = {
  require: [resolve(__dirname, './test/setup.mjs')],
}
