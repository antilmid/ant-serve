module.exports = (router) => {
  router("/api/helloworld", (ctx) => (ctx.body = "hello world"));
};
