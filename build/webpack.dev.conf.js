const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: [path.join(__dirname, "../src/index.js")]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "app-[hash:6].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html")
    }),
    new OpenBrowserWebpackPlugin({
      url: "http://localhost:8080/"
    })
  ]
};
