const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      'extensions/tools/dist/sidebar': './extensions/tools/src/sidebar',
      'extensions/tools/dist/config': './extensions/tools/src/config',
      'extensions/tools/dist/l10n-tools': './extensions/tools/src/manager',

      'extensions/github/dist/github': './extensions/github/src/github.js',
      'extensions/github/dist/content': './extensions/github/src/content.js',

      'extensions/pontoon/dist/pontoon': './extensions/pontoon/src/pontoon.js',
      'extensions/pontoon/dist/content': './extensions/pontoon/src/content.js',
      'extensions/pontoon/dist/config': './extensions/pontoon/src/config.js',

      'extensions/pootle/dist/pootle': './extensions/pootle/src/pootle.js',
      'extensions/pootle/dist/config': './extensions/pootle/src/config.js',

      'extensions/weblate/dist/weblate': './extensions/weblate/src/weblate.js',

      'extensions/checks/dist/checks': './extensions/checks/src/checks.js',

      'extensions/caighdean/dist/caighdean': './extensions/caighdean/src/caighdean.js',

      'extensions/amagama/dist/amagama': './extensions/amagama/src/amagama.js',
  },
  output: {
    // This copies each source entry into the extension dist folder named
    // after its entry config key.
      path: './',
      filename: '[name].js',
  },
  module: {
    // This transpiles all code (except for third party modules) using Babel.
    loaders: [{
      exclude: /node_modules/,
      test: /\.js$/,
      loaders: ['babel'],
    },{
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
    },{
	test: /\.json$/,
	loader: 'json-loader',
    }],
  },
  resolve: {
    // This allows you to import modules just like you would in a NodeJS app.
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve(__dirname),
    ],
    modulesDirectories: [
      'src',
      'node_modules',
      'web-ext-plugins/src',
    ],
  },

  plugins: [
    // Since some NodeJS modules expect to be running in Node, it is helpful
    // to set this environment var to avoid reference errors.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  // This will expose source map files so that errors will point to your
  // original source files instead of the transpiled files.
  devtool: 'sourcemap',
};
