import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

const env = process.env.NODE_ENV;

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'cjs',
  plugins: [
    nodeResolve(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
};
