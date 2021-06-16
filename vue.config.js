module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      Object.assign(args[0], {
        title: 'HotCoinList',
      });
      return args;
    });
  },
};
