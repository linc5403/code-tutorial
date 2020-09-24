module.exports =  (router) => {
  router.get('/welcome1', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

    ctx.response.body={status: "ok xxxx"};
  })
}

// module.exports = (router) => {
//   router.get('/test', async function(ctx, next) {
//     const { name } = ctx.request.body;

//     console.log("name ===>", name);
//     let data = {
//       status: "success",
//     };

//     ctx.response.body = data;
//   });
// };
