const path = require('path')

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: '[name].bundle.js', // name = entry.main output main.bundle.js
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  }
}