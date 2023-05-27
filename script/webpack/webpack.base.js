const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar')

const argv = process.argv[process.argv.length - 1]

const src = path.join(process.cwd(), '/src') // 入口文件

const getEntry = () => {
  // 入口文件
  let entry = {}
  let htmlTemplate = []
  /** 得到src路径下面的所有项目 */
  const getEntryFiles = (root, list) => {
    const files = fs.readdirSync(root, { withFileTypes: true });
    files.forEach(item => {
      const pathName = path.join(root, item.name);
      if(item.isDirectory()) {
        getEntryFiles(pathName, list)
      }else if(pathName.includes('index.jsx')) {
        list.push(pathName)
      }
    })
    return list
  }

  
  const files = getEntryFiles(src, [])
  files.forEach((item) => {
    // 入口文件的配置
    const match = item.match(/src\/(.*)\/index/)
    const pathName = match && match[1]

    // 指定打包那个项目，没有指定则打包全部项目
    // if(argv && argv !== pathName) return

    entry[`${pathName}/index`] = item

    // template模板的设置
    htmlTemplate.push(new HtmlWebpackPlugin({
      template: path.join(src, '/index.html'),
      filename: `${pathName}/index.html`,
      chunks: [`${pathName}/index`],
      title: ''
    }))
  })
  return { entry, htmlTemplate }
}


const {entry, htmlTemplate} = getEntry()
console.log(entry, argv)

module.exports = {
  entry: entry,
  output: {
    path: path.join(src, '../dist'),
    filename: `[name]-[chunkhash:5].js`,
    clean: true
  },
  plugins: [
    ...htmlTemplate,
    new WebpackBar()
  ],

  module: {
    rules: [{
      test: /\.(jsx)$/,
      use: 'babel-loader'
    }, {
      test: /\.less$/,
      use: [
        'css-loader',
        'less-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.join(src, '')
    }
  },
}

