const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BASE_DIR = __dirname;

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    compress: true,
    historyApiFallback: true,
    stats: "minimal"
  },
  resolve: {
    alias: {
      basedir: path.resolve(BASE_DIR),
      app: path.resolve(BASE_DIR, "src/app"),
      components: path.resolve(BASE_DIR, "src/components"),
      utils: path.resolve(BASE_DIR, "src/utils"),
      modules: path.resolve(BASE_DIR, "src/modules"),
      apis: path.resolve(BASE_DIR, "src/apis"),
      interfaces: path.resolve(BASE_DIR, "src/interfaces"),
      schemas: path.resolve(BASE_DIR, "src/schemas"),
      hocs: path.resolve(BASE_DIR, "src/hocs"),
      resources: path.resolve(BASE_DIR, "src/resources"),
      services: path.resolve(BASE_DIR, "src/services")
    },
    extensions: [".js", ".jsx", ".tsx", ".ts", ".svg"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
