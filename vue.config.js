const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/main' : '',
  outputDir: 'docs/main',
  transpileDependencies: true,
});
