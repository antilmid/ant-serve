const serve = require("koa-static");
const path = require("path");
module.exports = {
  // 监听端口
  port: 80,
  // 中间层注册
  middleware: ["method-link", serve(path.resolve(__dirname, "../root"))],
};
