import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup'; // eslint-disable-line import/extensions
import uglify from 'rollup-plugin-uglify';
import capitalize from 'capitalize';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/index.js',
  plugins: [
    babel(babelrc()),
    uglify(),
  ],
  external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: capitalize(pkg.name),
      sourceMap: true,
    },
  ],
};
