const inquirer = require('inquirer')
const spawn = require('cross-spawn')
const {projectList, runQuestion, createQuestion} = require('./config')

/** 是运行项目还是创建项目 */
const isRun = process.argv.includes('run')

inquirer.prompt(isRun ? runQuestion : createQuestion).then(res => {
  if(isRun) {
    const {projectName, mode, runEnv} = res
    process.env.NODE_ENV = runEnv
    process.env.projectName = projectName
    process.env.mode = mode
    spawn('node', ['./script/index.js'], {
      stdio: 'inherit',
      cwd: process.cwd(),
    })
  }
})
