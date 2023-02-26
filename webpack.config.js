const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/public/js/web.ts'
  },
  output: {
    path: path.resolve(__dirname, 'release'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
