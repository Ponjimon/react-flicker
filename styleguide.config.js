const path = require("path");

module.exports = {
  components: "src/components/**/[A-Z]*.js",
  defaultExample: true,
  title: "React FlickerText",
  require: [path.join(__dirname, "src/styles/styleguidist.css")],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
  }
};
