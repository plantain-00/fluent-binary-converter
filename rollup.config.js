import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'dist/browser/index.js',
  name: 'FluentBinaryConverter',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    file: 'dist/fluent-binary-converter.min.js',
    format: 'umd'
  }
}
