module.exports =  (router) => {


  router.get('/', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
      title: 'Koa2',
      name: 'zhangsan'
    }
    await ctx.render('index', ctx.state)
  })


  router.get('/welcome', async function (ctx, next) {
    ctx.body = "this is welcome"
  })


  
}
