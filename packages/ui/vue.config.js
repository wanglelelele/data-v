const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8083,
  },
  // 必要
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  publicPath: "auto",
  configureWebpack: {
    // 必要
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "ui",
        filename: "remoteEntry.js",
        exposes: {
          // 导出对应文件，
          // 键名对应该文件相对于打包后文件名为remoteEntry.js的相对路径，
          // 键值对应到从vue.config.js到该模块的相对路径地址
          "./TestTree.vue": "./src/ui-component/TestTree.vue",
          "./components": "./src/ui-component",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
      require("unplugin-element-plus/webpack")(),
    ],
  },
});
