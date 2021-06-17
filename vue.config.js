module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('element-ui', '@pwp-app/better-element-ui');
    config.plugin('html').tap((args) => {
      Object.assign(args[0], {
        title: 'HotCoinList',
      });
      return args;
    });
  },
};
