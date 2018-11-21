import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

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
    commonjs(),
    postcss({
      modules: {
        generateScopedName: '_boardUI_[name]__[local]___[hash:base64:5]',
      },
      extract: './lib/boilerplate-form.css',
    }),
  ],
  external: id => /^react|styled-jsx/.test(id)
};