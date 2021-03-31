const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 7000,
    hot: true,
    liveReload: true,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["url-loader?limit=200000"],
      },
      {
        test: /\.(gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              query: {
                name: "assets/[name].[ext]",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
};
