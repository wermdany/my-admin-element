const Koa = require("koa");
const router = require("./router/index");

const app = new Koa();
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});
app.use(router.routes());

app.listen(7000);
console.log("server is start at http://localhost:7000");

module.exports = () => app;