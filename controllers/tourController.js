const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.CheckId = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      state: 'fail',
      message: '无效id',
    });
  }
  next();
};
//导出的第二个好处是我不用再把需要的参数导出了，比如tours
exports.checkBody = (req, res, next) => {
  console.log(req.body);
  if (!req.body.name) {
    res.status(400).json({
      state: 'fail',
      message: '没有name',
    });
  }
  next();
};
exports.getAllTours = (req, res) => {
  //url的格式是api/版本/数据，符合rest架构原则
  res.status(200).json({
    //符合jsent格式化
    state: 'success',
    data: {
      tours,
      //这是tours：tours的缩写，key value一样可以这样写
    },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  //一个数字字符串转数字的小技巧
  const tour = tours.find((el) => el.id === id);

  //记得要确定这个参数有效
  // if (!tour) {
  //   return res.status(404).json({
  //     state: 'false',
  //     message: '无效的id',
  //   });
  // }
  res.status(200).json({
    state: 'success',
    data: {
      tour,
    },
  });
};
exports.createTour = (req, res) => {
  console.log(req.body);
  res.send('ok');
};
exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  // if (!tour) {
  //   return res.status(404).json({
  //     state: 'fail',
  //     message: '无效id',
  //   });
  // }
  res.status(200).json({
    state: 'success',
    message: '完成更新',
  });
};
exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      state: 'fail',
      message: '无效id',
    });
  }
  res.status(204).json({
    //204代表无内容所以data为null
    state: 'success',
    data: null,
  });
};
