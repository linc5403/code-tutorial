const Koa = require('koa')
const Router = require('koa-router')
const moment  = require('moment');
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const nunjucksEnv = require('nunjucks');
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const { formatTime } = require('./common/utils');

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger((str,args)=>{

    /* 加上时间 */
    console.log(` ${str} - ${moment().format()}`)
  }))
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: { nunjucksEnv },
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

nunjucksEnv.configure(path.join(__dirname, '/views'),{

  trimBlocks: true,
  lstripBlocks: true
}).addFilter('formatTime',formatTime)

/* 路由 */
routes(router)

app.on('error', function(err, ctx) {
  console.log(err)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
