const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/design-token-demo/main' : '',
  outputDir: 'docs/main',
  transpileDependencies: true,
});
