/* eslint-disable max-len */
/**
 * Build config for development process that uses Hot-Module-Replacement
 * https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 */


module.exports = {
    module: {
      rules: [
        {
          test: /\.global\.css$/,
          loaders: ['style-loader', 'css-loader?sourceMap'],
        },
  
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
          ],
        },
  
        // WOFF Font
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        },
        // WOFF2 Font
        {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        },
        // TTF Font
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        },
        // EOT Font
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader',
        },
        // SVG Font
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        },
        // Common Image Formats
        {
          test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
          use: 'url-loader',
        },
      ],
    },
  }