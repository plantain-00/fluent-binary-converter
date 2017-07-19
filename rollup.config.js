import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'dist/browser/index.js',
  dest: 'dist/fluent-binary-converter.min.js',
  format: 'umd',
  moduleName: 'FluentBinaryConverter',
  plugins: [resolve(), uglify()]
}
