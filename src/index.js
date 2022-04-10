import Koa from 'koa';

const app = new Koa();
const PORT = 3000;

app.use(async ctx => {
  ctx.body = 'Aplicación web muy simple';
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en puerto : ${PORT}`);
});