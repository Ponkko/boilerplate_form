import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

module.exports = {
  input: "./src/App.js",
  output: {
    file: './lib/index.js',
    format: "cjs" 
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify('dev')
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ],
  external: id => /^react|styled-jsx/.test(id)
};