const router = require("koa-router")();
const controller = require("../controller/c_posts");

//首页
router.get("/indexNode", controller.getPosts);

//科考动态
router.get("/dynamicNode", controller.getDynamic);

//科研成果
router.get("/achievementsNode", controller.getResult);



module.exports = router;
