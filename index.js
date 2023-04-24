const Koa = require("koa");
const config = require("./config/default");
const cors = require("./middlewares/cors");

const app = new Koa();

app.use(cors);
//  路由
app.use(require("./routers/index.js").routes());

app.listen(config.port);

console.log(`listening on port ${config.port}`);
