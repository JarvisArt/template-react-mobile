const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: "./src/app.tsx",
  },
  output: {
    publicPath: '',
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'] // less css
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            paths: [
              path.resolve(__dirname, "src")
            ]
          }
        }]
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /^node_modules$/,
        loader: 'url-loader?limit=10000&name=/images/[hash:8].[name].[ext]',
        //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /^node_modules$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*'], {
      root: path.resolve(__dirname, '../'), // 根目录，默认为当前目录
      exclude: [],
      verbose: true //开启在控制台输出信息
      // dry: true //启用删除文件
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'static', // 不配置 to 默认会 copy 到 dist 目录也就是 webpack 的 output 配置
      }
    ])
  ]
};
