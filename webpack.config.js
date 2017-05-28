const path = require('path');

module.exports = {
  entry: {
  	app: path.resolve(__dirname, 'src/entry.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", query: { plugins: ['transform-decorators-legacy', 'transform-class-properties'], presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /jquery/, loader: 'expose?$!expose?jQuery' },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
};
