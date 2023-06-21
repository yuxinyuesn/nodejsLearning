const express = require('express');

const morgan = require('morgan');
const userRoute = require('./routes/userRoute');
const tourRoute = require('./routes/tourRoute');
const app = express();
//1 中间件
app.use(express.json());
app.use((req, res, next) => {
  console.log('第二个');
  next();
});
app.use((req, res, next) => {
  console.log('第一个');
  next();
});
app.use(morgan('dev'));
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
module.exports = app;
