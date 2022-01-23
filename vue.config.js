const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Brenda Cayzac",
    },
  },
});
