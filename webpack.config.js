const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "main.js",
  },
  watch: true,
  mode: "production",
};
