const webpack = require( 'webpack' );
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const LodashModuleReplacementPlugin = require( 'lodash-webpack-plugin' );

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: '[name].[contenthash].js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin( {
        template: require( 'html-webpack-template' ),
        inject: false,
        appMountId: 'app',
        filename: 'index.html'
      } ),
    new webpack.ContextReplacementPlugin( /moment[\/\\]locale$/, /en/ ),
    new LodashModuleReplacementPlugin
  ],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = ( env, argv ) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};
