const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  optimization: {
    minimize: false,
  },
  mode: "production",
});
