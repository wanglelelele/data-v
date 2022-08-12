const { defineConfig } = require("@vue/cli-service");
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const Components = require('unplugin-vue-components/webpack')
// const AutoImport = require('unplugin-auto-import/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "./dev/serve.ts",
    },
  },
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')(),
    ],
  },
  // configureWebpack: {
  //   plugins: [
  //     AutoImport({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //     Components({
  //       resolvers: [ElementPlusResolver()],
  //     }),
  //   ],
  // },
});
