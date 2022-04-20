import Koa from 'koa';

const app = new Koa();
const PORT = process.env.PORT;

app.use(async ctx => {
  ctx.body = 'Buenas noches Chile';
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto : ${PORT}`);
});