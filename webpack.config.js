module.exports = {
  entry: './public/js/app.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'}
    ]
  }
}


// How is it compiling everything if im only telling it to look at app.js
