const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "Client"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    port: 6020,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"], // Add the extensions you want to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "babel-loader",
        },
      },
    ],
  },
};
