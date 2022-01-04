const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
            loader: 'url-loader',
            options: {
                name:'assets/[name].[ext]',
                limit:2048
            }
        }
    },
    ],
  },

};