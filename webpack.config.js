const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  mode: 'development', // 为了便于查看编译后的代码，采用development，实际生产环境建议改为production（自带压缩与混淆）
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // webpack-dev-server配置信息
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8088
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'qcms打包实例',
      inlineSource: '.(js|css)$',
      template: './src/index.html'
      // inject: true
      // chunks: ['app']
    }),
    // Enhances html-webpack-plugin functionality by adding the {inlineSource: 'regex string'} option
    new HtmlWebpackInlineSourcePlugin()
  ],
  optimization: {
    // 将 runtime 代码拆分为一个单独的 chunk, 用于管理被分出来的包
    runtimeChunk: 'single',
    // 将第三方库(library)（例如 lodash 或 react）提取到单独的 runtime chunk 文件中
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /[\\/]node_modules[\\/]/,
          name: 'venders',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ]
  }
};