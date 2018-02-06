module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  },
  devServer: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
    disableHostCheck: true
  }
};
