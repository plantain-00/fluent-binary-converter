const { uglify } = require('rollup-plugin-uglify')
const resolve = require('@rollup/plugin-node-resolve')

module.exports = {
  input: 'dist/browser/index.js',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    name: 'FluentBinaryConverter',
    file: 'dist/fluent-binary-converter.min.js',
    format: 'umd'
  }
}
