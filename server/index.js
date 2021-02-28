const koa = require("koa");
const fs = require("fs");
const path = require("path");
const serverConfig = require("./server.config");

const app = new koa();

// 构造数据集
const baseData = {
  // 初始化方法集合
  methodMap: new Map(),
  // 服务器配置
  serverConfig,
};

// 方法路由
const routerForMethod = (path, fn) => {
  // 注册api
  baseData.methodMap.set(path, fn);
};

// 函数式导入
const requireFn = (rqPath) => {
  const module = require(rqPath);
  if (module instanceof Function) return module;
  return Function.prototype;
};

// 加载api映射
(function initFile(curPath) {
  const abPath = path.resolve(__dirname, curPath);
  const dirList = fs.readdirSync(abPath, { withFileTypes: true }) || [];
  dirList.map((fileInfo) => {
    const curFile = path.resolve(abPath, fileInfo.name);
    fileInfo.isDirectory()
      ? initFile(path.join(curPath, fileInfo.name))
      : requireFn(curFile)(routerForMethod);
  });
})("./apiMethod");

// 加载中间件
(serverConfig.middleware || []).map((middleware) => {
  if (typeof middleware === "string") {
    const mwPath = path.resolve(__dirname, "./middleware", middleware);
    const mwFn = requireFn(mwPath);
    app.use(async (ctx, next) => mwFn(ctx, next, baseData));
  }
  if (typeof middleware === "function") {
    const mwFn = middleware;
    app.use(async (ctx, next) => await mwFn(ctx, next, baseData));
  }
});

app.listen(serverConfig.port || 80);
