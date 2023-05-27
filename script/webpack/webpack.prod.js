
const {merge} = require('webpack-merge')
const base = require('./webpack.base.js')
const webpack = require('webpack')

// const prodConfig = merge(base ,{
//   mode: 'production'
// })
// const compiler = webpack(prodConfig)
// compiler.run(res => {
//   compiler.close((closeErr) => {
//     closeErr && console.log(closeErr);
//   });
// })

module.exports = merge(base ,{
  mode: 'production'
})