const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  devServer: {
    port: 8090,
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "editor",
        // 表示当前应用是一个 Host，可以引用 Remote 中 expose 的模块
        remotes: {
          // ui为之前我们remote出来的容器名称，映射其对应的远程地址。
          // 这里我手动指定了项目的端口号为8083
          // 又因为其打包后导出的文件名为remoteEntry，所以地址如下
          // 引入完毕之后即可使用其暴露出来的
          ui: "ui@http://localhost:8083/remoteEntry.js",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
});
