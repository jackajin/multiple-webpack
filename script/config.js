const projectList = [
  {
    name: '首页',
    value: 'home'
  }
]

const runQuestion = [
  {
    type: 'list',
    name: 'projectName',
    message: '请选择项目名字',
    choices: projectList,
  },
  {
    type: 'list',
    name: 'mode',
    message: '运行方式',
    choices: [
      { name: '开发调试', value: 'dev' },
      { name: '打包上线', value: 'build' }
    ]
  },
  {
    type: 'list',
    name: 'runEnv',
    message: '运行环境',
    choices: [
      { name: '测试', value: 'test' },
      { name: '预发', value: 'pre' },
      { name: '正式', value: 'pro' }
    ]
  },
]

module.exports = {projectList, runQuestion}