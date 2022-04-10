import Koa from 'koa';
const app = new Koa();


const PORT = 3000;

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto : ${PORT}`);
});