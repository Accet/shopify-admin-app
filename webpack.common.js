const path = require("path");

module.exports = {
  entry: {
    "script-injector": "/src/script-injector.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "theme-app-extension", "assets"),
    // libraryExport: "default",
    library: {
      root: "TBYB",
      amd: "tbyb",
      commonjs: "tbyb-common",
    },
    libraryTarget: "umd",
  },
};
