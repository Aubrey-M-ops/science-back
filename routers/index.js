const router = require("koa-router")();
const controller = require("../controller/c_posts");

//首页
router.get("/indexNode", controller.getPosts);

//科考动态
router.get("/dynamicNode", controller.getDynamic);

//科研成果
router.get("/achievementsNode", controller.getResult);

//科研成果筛选
router.get("/test", controller.getFilterResults);

//科研成果筛选
router.get("/test1", controller.getSelectItems);

module.exports = router;
