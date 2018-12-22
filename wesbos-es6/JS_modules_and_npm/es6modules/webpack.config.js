// const webpack = require("webpack");

// const nodeEnv = process.env.NODE_ENV || "production";

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    filename: "./app.js",
  },
  output: {
    filename: "_build/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015-native-modules"],
        },
      },
    ],
  },
  plugins: [
    // uglify js ** depreciated in webpack 4 **
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: { comments: false },
    //   sourceMap: true,
    // }),
    // // env plugin * depreciated in webpack 4 *
    // new webpack.DefinePlugin({
    //   "process.env": { NODE_ENV: JSON.stringify(nodeEnv) },
    // }),
  ],
};
