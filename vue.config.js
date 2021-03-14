module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("VuetifyLoaderPlugin").tap(() => [
      {
        progressiveImages: true,
      },
    ]);
  },
};
