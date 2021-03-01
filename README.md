<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Ant-Serve（蚂蚁服务器）](#ant-serve%E8%9A%82%E8%9A%81%E6%9C%8D%E5%8A%A1%E5%99%A8)
- [开箱即用，简单方便](#%E5%BC%80%E7%AE%B1%E5%8D%B3%E7%94%A8%E7%AE%80%E5%8D%95%E6%96%B9%E4%BE%BF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Ant-Serve（蚂蚁服务器）

> 开发 AS 主要的目的是解决自己需要一个快速、简单且轻巧的服务器结构，方便实验性的去制作一些 demo 和小小个人网站。设计这个服务架构的主要目的就是快速轻巧，开箱即用的模式。服务依赖还是优先选择了 Koa，正如 Koa 官网说是“它是一个基于 Node.js 平台的下一代 web 开发框架”。
>
> AS 继承了 Koa 的特点，也是通过中间件模式快速实现消息传递，而且能够完美兼容 koa 的中间件生态。
>
> 除了原有的方案，AS 实现了一个简单的 API 为导向的路由模式，为的是能够更好、更舒适的开发动态或静态接口。

# 开箱即用，简单方便

第一步，直接 git 对应的 master 分支，这边 gitee 和 github 两个仓库同时同步，clone 后即可得到一个新鲜的 AS 服务器。

```
git clone https://gitee.com/antilmid/ant-server.git
```

或者

```
git clone https://github.com/antilmid/ant-serve.git
```

得到源文件后只需要 npm 正常安装依赖，即是一个功能完整的服务器。

```
npm i
```

启动服务器就更简单了，你甚至直接用 node 运行 server 下的 index 文件，服务都可以启好。这里推荐使用 AS 集成好的 Command 来启动服务器，具体 Command 可以查看工程文件夹下的`package.json`文件。

启动方案 1：直接用 node 启动（不推荐）

```
node ./server/index.js
```

启动方案 2：使用命令启动

```
npm run start
```
