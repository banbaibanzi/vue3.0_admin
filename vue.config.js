module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 构建项目生成目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // 关闭语法的自动检测
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/main.scss";`
      }
    }
  }
};
