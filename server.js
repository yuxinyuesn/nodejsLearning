const app = require('./app');
const port = 8000;
app.listen(port, () => {
  console.log(`服务器在${port}端口启动`);
});
