module.exports = (router) => {
  router.get("/welcome", async function (ctx, next) {
    ctx.state = {
      title: "koa2 title",
    };

    ctx.response.body = { status: "ok origin" };
  });

  router.get("/test", async (ctx, next) => {
    ctx.response.type = "json";
    ctx.response.body = { laji: "这是一个炸炸" };
  });
};
