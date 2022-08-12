const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "./dev/serve.ts",
    }
  },
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')(),
    ],
  },
});
