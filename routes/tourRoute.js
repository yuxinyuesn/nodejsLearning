const express = require('express');
const fs = require('fs');
const tourController = require('./../controllers/tourController');
const router = express.Router();
router.param('id', tourController.CheckId);
//这个函数是挂在路由上的只有在这个路由上是才会检查，有才会执行。注意参数(req, res, next, val)
//这里的另一个有趣之处是将check函数在controller写好然后导出，第一个是全职分明，第二个理由卸载控制器
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
//这样去链接多种处理，多说一句去学学req和res的结构
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = router;
