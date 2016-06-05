const webpack = require('webpack');


// Get environment for build types
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: __dirname + '/src/scripts',
  entry: {
    app: './entrypoints/app'
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].js",
    publicPath: '/dist/'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    })

  ],

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'eval' : null,

};

// If environment === production, then include minification plugin and drop console_* from code and hide warnings
if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}