var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: ['babel-polyfill', APP_DIR + '/javascript/index.jsx'],
  resolve: {
    alias: {
        'sinon': 'sinon/pkg/sinon'
    },
    root: [
      // allows us to import modules as if /src was the root.
      // so I can do: import Comment from 'components/Comment'
      // instead of:  import Comment from '../components/Comment' or whatever relative path would be
      path.resolve(__dirname, './src/app')
    ],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.css']
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: 'public',
    filename: 'javascript/bundle.js'
  },
  module : {
    noParse: [
        /node_modules\/sinon\//,
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    data: '@import "stylesheet/_config.scss";',
    includePaths: [path.resolve(__dirname, './src/app')]
  },
  devServer: {
    inline: true
  },
  plugins: [
    new ExtractTextPlugin("stylesheet/style.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};

module.exports = config;
