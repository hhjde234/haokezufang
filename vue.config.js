const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "好客租房";
      return args;
    });
  },
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: "localhost",
    },
  },
});
