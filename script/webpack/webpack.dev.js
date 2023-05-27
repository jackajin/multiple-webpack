const base = require('./webpack.base.js')

const {merge} = require('webpack-merge')

const argv = process.argv[process.argv.length - 1]


module.exports = merge(base, {
  mode: 'development',
  devServer: {
    static: './dist', // 服务的目录
    hot: true,
    port: 9000,
  }
})