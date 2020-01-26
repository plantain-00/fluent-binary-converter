import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'dist/browser/index.js',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    name: 'FluentBinaryConverter',
    file: 'dist/fluent-binary-converter.min.js',
    format: 'umd'
  }
}
