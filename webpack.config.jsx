const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  //obiekt — module. Jego zadanie polega na wpływaniu na moduły, które bezpośrednio ładujemy jako zależności naszej aplikacji. Przeważnie jedynym parametrem, który będzie wpływał na moduły, będzie parametr rules.
  module: {
    rules: [
      {
        test: /\.js$/,
        //test — warunek, który musi zostać spełniony w nazwie importowanego modułu, aby mógł zostać przetransformowany danym loaderem. Najczęściej są to rozszerzenia (tak jak w przykładzie powyżej),
        loader: "babel-loader"
        //options: {presets: ['env', 'react']} //zamiast w bliku .babelrc mozna to wpisac tu
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true
      }
    }
  }

};


