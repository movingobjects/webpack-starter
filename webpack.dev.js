
const { DefinePlugin } = require('webpack'),
      merge            = require('webpack-merge'),
      common           = require('./webpack.common.js');

module.exports = merge(common, {

  devtool: 'cheap-inline-source-map',

  module: {
    rules: [

      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'source-map-loader'
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },

  plugins: [
    new DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

});
