/**
 * API方法链接，使其地址可以映射api
 * @date 2021-02-28
 * @param {any} ctx
 * @param {any} next
 * @param {any} globalData 全局数据
 * @returns {any}
 */
module.exports = async function (ctx, next, globalData) {
  const { methodMap = new Map() } = globalData;
  const method = methodMap.get(ctx.path) || Function.prototype;
  method(ctx, globalData);
  await next();
};
