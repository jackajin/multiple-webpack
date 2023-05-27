const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')


const prodConfig = require('./webpack/webpack.prod')
const devConfig = require('./webpack/webpack.dev')

const {mode} = process.env

/** 开发环境 */
if(mode === 'dev') {
  const compiler = webpack(devConfig)
  const server = new WebpackDevServer({}, compiler)
  server.startCallback()
}

/** 打包 */
if(mode === 'build') {
  const compiler = webpack(prodConfig)
  compiler.run()
}




