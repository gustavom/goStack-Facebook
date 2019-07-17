const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output:{
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css$/,
        use:[
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test:/.*\.(gif|jpe?g|png)$/i,
        use:[
          {loaver: 'file-loader'}
        ]
      },
      {
        test: /\.svg$/,
        use: [
          'desvg-loader/react', // 👈 Add loader (use 'desvg-loader/preact' for Preact)
          'svg-loader' // 👈 svg-loader must precede desvg-loader
        ],
      },
    ]
  }
}